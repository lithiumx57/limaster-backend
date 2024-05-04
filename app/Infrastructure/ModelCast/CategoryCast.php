<?php

namespace App\Infrastructure\ModelCast;

use App\Models\Category;

class CategoryCast
{
  public static function castAll(): array
  {
    $records = Category::orderBy("position", "ASC")->where("approved", true)->get();
    return self::castCollection($records);
  }


  public static function castCollection($records): array
  {
    $collection = [];
    foreach ($records as $record) {
      $collection[] = self::cast($record);
    }
    return $collection;
  }


  public static function cast(Category $category): array
  {
    return [
      "id" => $category->id,
      "name" => $category->name,
      "slug" => $category->slug,
      "image" => $category->getImage(),
    ];
  }

  public static function castPage()
  {
    $slug = request()->input("slug");
    if (!$slug) abort(404);
    $slug=urldecode($slug);

    $category = Category::where("slug", $slug)->where("approved", true)->first();
    if (!($category instanceof Category)) abort(404);

    return [
      ...self::cast($category),
      "products" => ProductCast::castAll($category)
    ];


  }
}