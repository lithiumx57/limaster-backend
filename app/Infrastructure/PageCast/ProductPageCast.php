<?php

namespace App\Infrastructure\PageCast;

use App\Helpers\Cast\CastPublicData;
use App\Helpers\Cast\HeadBuilder;
use App\Infrastructure\ModelCast\BrandCast;
use App\Infrastructure\ModelCast\CarTypeCast;
use App\Infrastructure\ModelCast\CategoryCast;
use App\Models\Product;

class ProductPageCast
{
  public static function fullCastPage(): array
  {
    $slug = request()->input("slug");
    $slug = urldecode($slug);
    abort_if($slug == null, 404);

    $product = Product::where("slug", $slug)->where("approved", true)->first();
    if (!($product instanceof Product)) abort(404);

    return CastPublicData::castWith([
      "extra" => self::cast($product)
    ], HeadBuilder::getInstance()->simpleBuild(
      title: "عنوان تستی",
      description: "تست تست تست ",
      canonical: env("FRONTEND_URL") . "/category/" . request()->input("slug")
    ));

  }


  public static function cast(Product $product): array
  {
    return [
      "id" => $product->id,
      "name" => $product->name,
      "category" => CategoryCast::cast($product->category),
      "brand" => BrandCast::cast($product->brand),
      "carType" => CarTypeCast::cast($product->carType),
      "slug" => $product->slug,
      "review" => $product->review,
      "about" => $product->about,
      "image" => $product->getImage(),
      "score" => number_format($product->score, 1),
      "useful_volume" => $product->useful_volume,
      "price" => $product->price,
    ];
  }


}