<?php

namespace App\Infrastructure\Articles;

use App\Helpers\Cast\CastPublicData;
use App\Helpers\Cast\HeadBuilder;
use App\Infrastructure\ModelCast\CommentCast;
use App\Infrastructure\ModelCast\UserCast;
use App\Models\Article;
use App\Panel\helpers\XDateHelper;
use App\Panel\Models\Tag;
use Illuminate\Support\Str;

class ArticleCast
{
  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $row) {
      $records[] = self::cast($row);
    }
    return $records;
  }


  public static function cast(Article $article): array
  {

    return [
      "id" => $article->id,
      "title" => $article->title,
      "slug" => $article->slug,
      "category" => $article->category->title,
      "username" => $article->username,
      "time" => $article->time_to_read,
      "user" => UserCast::cast($article->user),
      "meta" => Str::substr(xEscapeHtml($article->description), 0, 191) . "...",
      "image" => $article->getImage(),
      "likesCount" => number_format($article->likes_count),
      "commentsCount" => number_format($article->comments_count),
      "viewCount" => number_format($article->views_count),
      "tags" => Tag::castByModel(Article::class, $article->id),
      "date" => XDateHelper::convertToJalali($article->publish_at, "Y/m/d"),
      "agoDate" => getAgoJalali($article->publish_at),
      "comments" => CommentCast::castAll($article),
//      "socials" => CastSocial::user($article->user),
//      "profile" => CastProfile::castLite($article->writer),
    ];
  }


  public static function pageCast(): array
  {
    $slug = request()->input("slug");

    $article = Article::where("approved", true)->where("slug", $slug)->first();

    if (!($article instanceof Article)) abort(404);

    return CastPublicData::castWith([
      "article" => self::fullCast($article),
    ], HeadBuilder::getInstance()->simpleBuild(
      title: "عنوان تستی",
      description: "تست تست تست ",
      canonical: env("FRONTEND_URL") . "/article/" . $article->slug,
    ));


  }

  public static function fullCast(Article $article): array
  {
    return [
      ...self::cast($article),
      "description" => self::buildText($article->description),
      "aside" => self::castArticlesForAside($article->id)
    ];
  }

  private static function castArticlesForAside($except): array
  {
    $records = [];
    $articles = Article::where("approved", true)->where("id", "!=", $except)->latest()->limit(24)->get();
    foreach ($articles as $article) {
      $records[] = [
        "id" => $article->id,
        "title" => $article->title,
        "image" => $article->getImage(),
        "slug" => $article->slug,
      ];
    }
    return $records;
  }

  private static function buildText($text): string
  {
    return Tag::replaceHashtag($text);
  }

  public static function castAll(): array
  {
    $articles = Article::latest()->limit(10)->get();
    return self::castCollection($articles);
  }


  public static function castWithPaginate($articlesPaginator): array
  {
    $records = self::castCollection($articlesPaginator);

    return [
      "records" => $records,
      "lastPage" => $articlesPaginator->lastPage(),
      "currentPage" => $articlesPaginator->currentPage(),
      "total" => $articlesPaginator->total()
    ];
  }


}
