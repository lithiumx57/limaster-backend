<?php

namespace App\Infrastructure\Articles;

use App\Models\Article;
use App\Models\Category;
use App\Panel\Models\Tag;
use App\Panel\Models\TagModel;
use App\Panel\Search\XSearchBuilder;

class ArticleSearch
{
  public static function search(): array
  {
    $page = request()->input("page");
    $category = request()->input("category");
    $keyword = request()->input("keyword");
    $tag = request()->input("tag");

    if (!$page) $page = 1;
    if (!$keyword) $keyword = "";


    setPage($page);

    if ($keyword) $records = XSearchBuilder::with(Article::class, $keyword, ["title"])->build();
    else $records = Article::query();

    if ($category && is_numeric($category)) {
      $category = Category::find($category);

      if ($category) $records = $records->where('category_id', $category->id);
    }

    if ($tag && is_numeric($tag)) {
      $tag = Tag::find($tag);
      if ($tag instanceof Tag) {
        $tagModels = TagModel::where("model", Article::class)->where('tag_id', $tag->id)->pluck("model_id")->toArray();

        if (count($tagModels) > 0) $records = $records->whereIn("id", $tagModels);
      }
    }


    $records = $records->latest()->paginate(8);

    return  ArticleCast::castWithPaginate($records);


  }
}