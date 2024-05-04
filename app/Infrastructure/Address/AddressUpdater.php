<?php

namespace App\Infrastructure\Address;

use App\Models\Address;
use Exception;

class AddressUpdater
{
  /**
   * @throws Exception
   */
  public static function switchDefault()
  {
    $id = request()->input("id");
    $address = Address::find($id);

    if ($address == null) {
      throw new Exception("آدرس یاقت نشد");
    }

    if ($address->default == 1) return;

    if ($address->user_id != user()->getId()) {
      throw new Exception("آدرس یاقت نشد");
    }

    $address->update([
      "is_default" => 1
    ]);

    auth()->user()->addresses()->where("id","!=",$address->id)->update(["is_default" => 0]);

  }
}