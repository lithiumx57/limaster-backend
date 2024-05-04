<?php

namespace App\Helpers\Cast;


class CastPublicData
{
  public static function cast($head = []): array
  {
    $hasFooter = request()->input("footer");
    if ($hasFooter == null) {
      $hasFooter = true;
    }


//    $footer = Menu::with("children")->where("parent", 0)->where("type", Menu::TYPE_FOOTER)->orderBy("position", "ASC")->get();

    return [
      "head" => @$head["head"],
      "footer" => $hasFooter ? [
//        "menus" => MenuCast::castCollection($footer),
        "phones" => [
          "02191301374"
        ],
        "emails" => [
          "info@mashinno.com"
        ],
      ] : [],
      "logo" => env("FRONTEND_URL") . "/assets/app/logo.png"
    ];


  }


  public static function castWith($data, $head = []): array
  {
    return [
      ...$data,
      "publicData" => self::cast($head),
    ];
  }


}
