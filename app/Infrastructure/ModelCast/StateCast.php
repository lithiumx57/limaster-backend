<?php

namespace App\Infrastructure\ModelCast;

use App\Models\Brand;
use App\Models\State;

class StateCast
{
  public static function castAll(): array
  {
    $states = State::all();
    return self::castCollection($states);
  }


  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $state) {
      $records[] = self::cast($state);
    }
    return $records;
  }


  public static function cast(State $state): array
  {
    return [
      "id" => $state->id,
      "name" => $state->name,
      "cities"=>CityCast::castCollection($state->cities()->orderBy("position","ASC")->get())
    ];
  }

}