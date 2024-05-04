<?php

namespace App\Infrastructure\Search;

use JetBrains\PhpStorm\ArrayShape;

interface SearchableInterface
{
  public function generateCache(): array;

  public function saveSearch(array $data):void;

  public static function getQuery();

}
