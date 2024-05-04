<?php

namespace App\Infrastructure\PageCast;

use App\Helpers\Cast\CastPublicData;
use App\Helpers\Cast\HeadBuilder;
use App\Infrastructure\ModelCast\CityCast;
use App\Infrastructure\ModelCast\StateCast;
use App\Models\Address;

class AddressesPageCast
{


  public static function castSPage()
  {
    return CastPublicData::castWith([
      "extra" => [
        "addresses" => self::castAll(),
      ]
    ], HeadBuilder::getInstance()->simpleBuild(
      title: "عنوان تستی",
      description: "تست تست تست ",
      canonical: env("FRONTEND_URL") . "/addresses"
    ));
  }


  public static function castPage(): array
  {
    return CastPublicData::castWith([
      "extra" => [
        "addresses" => self::castAll(),
        "states" => StateCast::castAll()
      ]
    ], HeadBuilder::getInstance()->simpleBuild(
      title: "عنوان تستی",
      description: "تست تست تست ",
      canonical: env("FRONTEND_URL") . "/addresses/add"
    ));

  }

  public static function castAll(): array
  {
    $user = auth()->user();
    $addresses = $user->addresses()->orderBy("is_default", "DESC")->get();
    return self::castCollection($addresses);
  }

  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $address) $records[] = self::cast($address);
    return $records;
  }


  public static function cast(Address $address): array
  {
    return [
      "id" => $address->id,
      "title" => $address->title,
      "description" => $address->description,
      "is_default" => $address->is_default,
      "created_at" => $address->created_at,
      "phone" => $address->phone,
      "email" => $address->email,
      "lat" => $address->lat,
      "lng" => $address->lng,
      "state" => StateCast::cast($address->state),
      "city" => CityCast::cast($address->city)
    ];
  }



}