<?php

namespace App\Infrastructure\ModelCast;

use App\Models\Slide;
use Exception;

class SlideCast
{
  public static function cast(Slide $slide): array
  {
    return [
      "image" => $slide->getImage(),
      "link" => $slide->link,
    ];
  }

  public static function castCollection($slides): array
  {
    $records = [];
    foreach ($slides as $row) {
      try {
        $records[] = self::cast($row);
      } catch (Exception $exception) {
      }
    }
    return $records;
  }

  public static function castAll(): array
  {
    $slides = Slide::orderBy("position", "ASC")->where("approved", true)->get();
    return self::castCollection($slides);
  }


}