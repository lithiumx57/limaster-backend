<?php

namespace App\Infrastructure\ModelCast;

use App\Infrastructure\Articles\ArticleCast;
use App\Models\Article;
use App\Models\Category;
use App\Models\Quotation;
use App\Panel\Models\Tag;
use App\Panel\Models\TagModel;
use App\Panel\Search\XSearchBuilder;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class QuotationCast
{
  public static function castAll(): array
  {
    $quotations = Quotation::getQuery()->with("user")->latest()->paginate(12);
    return self::castWithPagination($quotations);
  }

  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $row) $records[] = self::cast($row);
    return $records;
  }

  public static function castWithPagination(LengthAwarePaginator $result): array
  {
    return [
      "records" => self::castCollection($result),
      "lastPage" => $result->lastPage(),
      "currentPage" => $result->currentPage(),
      "total" => $result->total()
    ];
  }

  public static function cast(Quotation $quotation): array
  {
    $plus = 0;
    $minus = 0;
    if (is_array($quotation->plus)) $plus = count($quotation->plus);
    if (is_array($quotation->minus)) $plus = count($quotation->minus);

    return [
      "id" => $quotation->id,
      "description" => $quotation->description,
      "plus" => $plus,
      "minus" => $minus,
      "user" => UserCast::cast($quotation->user),
      "createdAt" => getAgoJalali($quotation->publish_at),
      "tags" => Tag::castByModel(Quotation::class, $quotation->id),
    ];
  }

  public static function searchAndCast()
  {
    $page = request()->input("page");
    $keyword = request()->input("keyword");
    $tag = request()->input("tag");

    if (!$page) $page = 1;
    if (!$keyword) $keyword = "";

    setPage($page);

    if ($keyword) $records = XSearchBuilder::with(Quotation::class, $keyword, ["description"])->build();
    else $records = Quotation::getQuery();


    if ($tag && is_numeric($tag)) {
      $tag = Tag::find($tag);
      if ($tag instanceof Tag) {
        $tagModels = TagModel::where("model", Quotation::class)->where('tag_id', $tag->id)->pluck("model_id")->toArray();
        if (count($tagModels) > 0) $records = $records->whereIn("id", $tagModels);
      }
    }
    $records = $records->latest()->paginate(8);
    return  self::castWithPagination($records);
  }


}