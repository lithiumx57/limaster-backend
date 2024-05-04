<?php

namespace App\Infrastructure\Search\Cache;

use App\Models\Article;
use App\Models\Job;
use App\Models\Project;

class SearchCacheHandler
{
  public static function handleAll():void
  {
    $records = [
      Article::class,
      Job::class,
      Project::class,
    ];

    foreach ($records as $row) {
      self::handle($row);
    }
  }

  public static function handle($model):void
  {
    $modelSearchCache=new ModelSearchCache();
    $modelSearchCache->cache($model);
  }

}
