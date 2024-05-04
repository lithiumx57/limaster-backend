<?php

namespace App\Infrastructure\ModelCast;

use App\Models\CarType;
use App\Models\Issue;

class CarTypeCast
{
  public static function castAll(): array
  {
    $carTypes = CarType::orderBy("position", "ASC")->get();
    return self::castCollection($carTypes);
  }


  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $carType) {
      $records[] = self::cast($carType);
    }
    return $records;
  }

  public static function cast(CarType $carType): array
  {
    return [
      "id" => $carType->id,
      "name" => $carType->name,
      "issues" => self::castIssues($carType)
    ];
  }


  private static function castIssues(CarType $carType): array
  {
    $records = [];

    foreach ($carType->issues()->orderBy("position", "ASC")->get() as $row) {
      $records[] = [
        "id" => $row->id,
        "title" => $row->title,
        "svg" => $row->svg,
        "lines" => self::castIssuesLines($row)
      ];
    }

    return $records;
  }

  private static function castIssuesLines(Issue $issue): array
  {
    $records = [];

    foreach ($issue->lines()->orderBy("position", "ASC")->get() as $row) {

      $records[] = [
        "id" => $row->id,
        "title" => $row->title,
      ];
    }

    return $records;
  }
}