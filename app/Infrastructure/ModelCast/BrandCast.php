<?php

namespace App\Infrastructure\ModelCast;

use App\Models\Brand;

class BrandCast
{
  public static function castAll(): array
  {
    $carTypes = Brand::all();
    return self::castCollection($carTypes);
  }


  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $brand) {
      $records[] = self::cast($brand);
    }
    return $records;
  }


  public static function cast(Brand $brand): array
  {
    return [
      "id" => $brand->id,
      "name" => $brand->name,
      "image" => $brand->getImage(),
    ];
  }

}