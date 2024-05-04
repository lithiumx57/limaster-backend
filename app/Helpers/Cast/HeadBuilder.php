<?php

namespace App\Helpers\Cast;

class HeadBuilder
{
  public static function getInstance()
  {
    return new HeadBuilder();
  }

  public function simpleBuild(string $title = "", string $description = "", string|null $canonical = ""): array
  {
    return [
      "head" => [
        "title" => $title,
        "description" => $description,
        "canonical" => $canonical
      ]
    ];
  }

}
