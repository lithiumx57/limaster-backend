<?php

namespace App\Infrastructure\ModelCast;

use App\Models\Category;
use App\Models\Project;

class CategoriesCast
{

  public static function castAll($model): array
  {
    $categries = Category::getQuery()->with("children")->where("model", $model)->where("parent",0)->orderBy("position", "ASC")->get();
    return self::castCollection($categries);
  }

  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $row) {
      $records[] = self::cast($row);
    }
    return $records;
  }


  public static function cast(Category $category): array
  {
    return [
      "id" => $category->id,
      "title" => $category->title,
      "slug" => $category->slug,
      "link" => $category->getApiLink(),
      "modelCount" => $category->model_count,
      "image" => $category->getImage(),
      "description" => $category->description,
      "children" => self::castCollection($category->children)
    ];
  }

  public static function castForPaths(string $model): array
  {
    $records = Category::getQuery()->where("model", $model)->select(["id", "slug"])->get();
    $result = [];
    foreach ($records as $row) $result[] = ["id" => $row->id, "slug" => $row->slug];
    return $result;
  }


}
