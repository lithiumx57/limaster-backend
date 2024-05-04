<?php

namespace App\Infrastructure\Address;

use App\Models\Address;
use App\Models\City;
use App\Models\State;
use Exception;

class AddressCreator
{


  /**
   * @throws Exception
   */
  public static function init():void
  {
    $title = request()->input("title");
    $address = request()->input("address");
    $phone = request()->input("phone");
    $email = request()->input("email");

    $state = request()->input("state");
    $city = request()->input("city");


    validate()->validateString($title, "عنوان", min: 3, max: 50);
    validate()->validateString($address, "آدرس", min: 8, max: 250);
    validate()->validateString($phone, "شماره موبایل", equals: 11);
    validate()->validateEmail($email, "ایمیل", min: 8, max: 50, required: false);

    if (!is_numeric($phone)) throw new Exception("شماره موبایل باید عددی باشد");

    if (!is_numeric($state)) throw new Exception("استان انتخاب نشده است");
    if (!is_numeric($city)) throw new Exception("شهر انتخاب نشده است");


    $state = State::find($state);
    $city = City::find($city);

    if (!($state instanceof State)) throw new Exception("استان انتخاب نشده است");
    if (!($city instanceof City)) throw new Exception("شهر انتخاب نشده است");


    if ($city->state_id != $state->id) throw new Exception("شهر یا استان درست انتخاب نشده است");


    $address = Address::create([
      "title" => $title,
      "user_id" => user()->getId(),
      "description" => $address,
      "phone" => $phone,
      "email" => $email,
      "state_id" => $state->id,
      "city_id" => $city->id,
      "is_default" => true
    ]);

    if ($address instanceof Address) Address::where("user_id", auth()->user()->id)->where("id", "!=", $address->id)->update([
      "is_default" => 0,
    ]);


  }
}