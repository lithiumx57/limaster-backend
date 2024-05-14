<?php

namespace App\Infrastructure\Forum;

use App\Helpers\Cast\CastPublicData;
use App\Helpers\Cast\HeadBuilder;
use App\Infrastructure\ModelCast\UserCast;
use App\Models\Forum;
use App\Panel\Models\Tag;
use App\Panel\Search\XSearchBuilder;

class QuestionCast
{
  public static function castAll(): array
  {
    $tag = request()->input("tag");
    $keyword = request()->input("keyword");

    $models = Tag::searchAndGetModelIds($tag, Forum::class);

    if ($keyword) $result = XSearchBuilder::with(Forum::class, $keyword, ["title"])->build()->where("approved", true);
    else $result = Forum::where("approved", true);

    if (count($models) > 0 || $tag) $result = $result->whereIn("id", $models);

    $result = $result->latest()->paginate(12);

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
    foreach ($collection as $row) $records[] = self::cast($row);
    return $records;
  }

  public static function cast(Forum $forum): array
  {
    return [
      "id" => $forum->id,
      "slug" => $forum->slug,
      "title" => $forum->title,
      "createdAt" => getAgoJalali($forum->created_at),
      "viewsCount" => $forum->views_count,
      "answerCount" => $forum->lines()->count(),
      "user" => UserCast::cast($forum->user),
      "done" => $forum->done,
//      "tagsCount" => $forum->tagsCount(),
      "tags" => Tag::castAll(Forum::class, $forum->id, 12)
    ];
  }

  public static function fullPageCast($id = null, $slug = null): array
  {
    if ($id == null) {
      $id = request()->input("id");
    }
    if ($slug == null) {
      $slug = request()->input("slug");
    }

    $forum = Forum::where("id", $id)->where("slug", $slug)->where("approved", true)->first();

    if (!($forum instanceof Forum)) abort(404);
    $answers = $forum->lines()->get();

    $records = [];

    foreach ($answers as $row) $records[] = [
      "id" => $row->id,
      "description" => $row->description,
      "likes" => $row->likes_count,
      "dislikes" => $row->dislikes_count,
      "user" => UserCast::cast($row->user),
      "createdAt" => $row->created_at,
      "done" => $row->done,
      "children" => $row->children()->pluck("id")->toArray(),
      "parent" => $row->parent,
    ];


    return CastPublicData::castWith([
      "extra" => [
        ...self::cast($forum),
        "description" => $forum->description,
        "answers" => $records
      ]
    ], HeadBuilder::getInstance()->simpleBuild(
      title: "عنوان تستی",
      description: "تست تست تست ",
      canonical: env("FRONTEND_URL") . "/forum"
    ));
  }

}