<?php

namespace App\Infrastructure\Search\Cache;

use App\Infrastructure\Search\SearchableInterface;
use App\Models\Article;
use Illuminate\Support\Collection;

class ModelSearchCache extends AbstractModelSearchCache
{
  public function getRecords($model): Collection
  {
    return $model::getQuery()->get();
  }

}
