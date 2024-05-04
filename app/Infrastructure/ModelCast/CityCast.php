<?php

namespace App\Infrastructure\ModelCast;

use App\Models\Brand;
use App\Models\City;

class CityCast
{

  public static function castAll(): array
  {
    $cities = City::all();
    return self::castCollection($cities);
  }


  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $city) {
      $records[] = self::cast($city);
    }
    return $records;
  }


  public static function cast(City $city): array
  {
    return [
      "id" => $city->id,
      "name" => $city->name,
    ];
  }

}