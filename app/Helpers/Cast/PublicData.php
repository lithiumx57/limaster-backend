<?php

namespace App\Helpers\Cast;


class PublicData
{

  public static function castPage(): array
  {

    $page = request()->input("page");
    $canonical = request()->input("canonical");



    $title = request()->input("title");
    $description = request()->input("description");

    if (!$canonical) {
      $canonical = "";
    }


    if ($page) {
      $page = HeadCast::castPage($page);


      if (!$title) {
        $title = @$page["title"];
      }

      if (!$description) {
        $description = @$page["description"];
      }


      return CastPublicData::castWith([], HeadBuilder::getInstance()->simpleBuild(
        title: $title,
        description: $description,
        canonical: env("FRONTEND_URL") . $canonical
      ));

    }


    return [
      "publicData" => CastPublicData::cast()
    ];


  }

}
