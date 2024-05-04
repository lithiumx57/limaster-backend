<?php

namespace App\Infrastructure\ModelCast;

use App\Models\Category;
use App\Models\Product;
use App\Panel\Search\XSearchBuilder;

class ProductCast
{
  public static function castAll(Category $category)
  {

    $page = request()->input("page");
    $keyword = request()->input("keyword");
    if ($page == null) $page = 1;
    if ($keyword == null) $keyword = "";

    setPage($page);

    $result = XSearchBuilder::with(Product::class, $keyword, ["name"])->build($category->products()->where("approved", true)->getQuery())
      ->latest()->paginate(12);


    return [
      "records" => self::castCollection($result),
      "lastPage" => $result->lastPage(),
      "currentPage" => $result->currentPage(),
      "total" => $result->total()
    ];
  }


  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $item) $records[] = self::cast($item);
    return $records;
  }


  public static function cast(Product $product): array
  {
    return [
      "id" => $product->id,
      "name" => $product->name,
      "slug" => $product->slug,
      "image" => $product->getImage(),
      "price" => $product->price,
    ];
  }



}