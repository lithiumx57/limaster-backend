<?php

namespace App\Infrastructure\Search\Cache;

use App\Infrastructure\Search\SearchableInterface;

abstract class AbstractModelSearchCache
{
  public abstract function getRecords($model);


  public function cache($model): void
  {
    $records = $this->getRecords($model);
    foreach ($records as $row) {
      if ($row instanceof SearchableInterface){
        $row->saveSearch($row->generateCache());
      }
    }
  }


}
