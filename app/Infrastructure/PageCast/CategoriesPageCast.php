<?php

namespace App\Infrastructure\PageCast;

use App\Helpers\Cast\CastPublicData;
use App\Helpers\Cast\HeadBuilder;
use App\Infrastructure\Articles\ArticleCast;
use App\Infrastructure\ModelCast\BannerCast;
use App\Infrastructure\ModelCast\CarTypeCast;
use App\Infrastructure\ModelCast\CategoryCast;
use App\Infrastructure\ModelCast\NewsCast;
use App\Infrastructure\ModelCast\SaleTableCast;
use App\Infrastructure\ModelCast\SlideCast;
use App\Infrastructure\ModelCast\TheaterCast;
use App\Models\Article;

class CategoriesPageCast
{

  public static function cast(): array
  {

    return CastPublicData::castWith([
      "extra" => [
        "categories" => CategoryCast::castAll(),
      ]
    ], HeadBuilder::getInstance()->simpleBuild(
      title: "عنوان تستی",
      description: "تست تست تست ",
      canonical: env("FRONTEND_URL") . "/categories"
    ));


  }

  public static function castSinglePage(): array
  {
    $searchMode = request()->input("searchMode");
    if ($searchMode) {
      return CategoryCast::castPage();
    }


    return CastPublicData::castWith([
      "extra" => CategoryCast::castPage()
    ], HeadBuilder::getInstance()->simpleBuild(
      title: "عنوان تستی",
      description: "تست تست تست ",
      canonical: env("FRONTEND_URL") . "/category/" . request()->input("slug")
    ));


  }

}

