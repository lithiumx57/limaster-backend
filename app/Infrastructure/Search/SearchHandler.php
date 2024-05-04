<?php

namespace App\Infrastructure\Search;

use App\Helpers\EnvManager;
use App\Models\Article;
use App\Models\Job;
use App\Models\Project;
use App\Panel\helpers\XStringHelper;
use App\Panel\Search\XSearchBuilder;
use Illuminate\Pagination\LengthAwarePaginator;

class SearchHandler
{

  public static function castAll($keyword): array
  {
    if (!is_string($keyword)) {
      return [];
    }

    $articles = XSearchBuilder::with(Article::class, $keyword, ["title", "description"])->build()->paginate(10);
    $projects = XSearchBuilder::with(Project::class, $keyword, ["title"])->build()->paginate(10);
    $jobs = XSearchBuilder::with(Job::class, $keyword, ["name", "title"])->build()->paginate(10);

    return [
      "articles" => self::castPaginate($articles),
      "projects" => self::castPaginate($projects),
      "jobs" => self::castPaginate($jobs),
    ];
  }


  private static function images($result)
  {
    return [];
    $images = [];

    $records = [];

    $paths = [];

    foreach ($result as $row) {

      if ($row == null) continue;
      if (!is_array($row->search["images"])) {
        continue;
      }


      $images = [
        ...$images,
        ...$row->search["images"]
      ];


      $i = 0;
      foreach ($images as $image) {
        $i++;
        if ($i > 8) break;

        if (hasIndex($paths, $image)) {
          continue;
        }
        $paths[] = $image;


        if (XStringHelper::startWith($image, "http")) $records[] = [
          "imagePath" => $image,
          "path" => "/article/" . $row->slug,
          "title" => $row->title,
        ];
        else $records[] = [
          "imagePath" => EnvManager::getUrl() . $image,
          "path" => "/article/" . $row->slug,
          "title" => $row->title,
        ];
      }


    }


    return $records;
  }


  private static function castPaginate(LengthAwarePaginator $result): array
  {
    $records = [];
    foreach ($result as $row) $records[] = self::cast($row);
    return [
      "records" => $records,
      "images" => self::images($result),
      "total" => $result->total(),
      "lastPage" => $result->lastPage(),
      "currentPage" => $result->currentPage()
    ];
  }

  public static function cast(SearchableInterface $searchable): array
  {
    return $searchable->generateCache();
  }

}
