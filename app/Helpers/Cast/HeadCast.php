<?php

namespace App\Helpers\Cast;

use App\Panel\Models\Head;

class HeadCast
{

  public static function castPage($key): array
  {
    $lang = "fa";
    $titleKey = $key . "_title_" . $lang;
    $descriptionKey = $key . "_description_" . $lang;

    $title = Head::getRow($titleKey);
    $description = Head::getRow($descriptionKey);
    if (!$title){
      return [
        "title" => "وارد نشده",
        "description" => "وارد نشده"
      ];
    }
    return [
      "title" => $title->value,
      "description" => $description->value
    ];
  }
}
