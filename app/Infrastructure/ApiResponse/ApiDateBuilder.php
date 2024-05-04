<?php

namespace App\Infrastructure\ApiResponse;

use Carbon\Carbon;
use Carbon\Exceptions\InvalidFormatException;
use Illuminate\Contracts\Support\Arrayable;
use stdClass;
use TypeError;

class ApiDateBuilder
{

  private const DEFAULT_DATE_FORMAT = "ago";

  public static function getInstance(): ApiDateBuilder
  {
    return new ApiDateBuilder();
  }


  private static function prepareDate($dates): array
  {
    $records = [];
    foreach ($dates as $key => $value) {
      if (is_numeric($key)) $records[$value] = self::DEFAULT_DATE_FORMAT;
      else $records[$key] = $value;
    }
    return $records;
  }


  public function buildDate($date, ApiDataStore $store)
  {
    $date = self::prepareDate($date);
    return self::convertDatesToJalali($store->getData(), $date);
  }


  private static function hasIndex($dates, $key): bool|array
  {
    foreach ($dates as $_key => $value) {
      if ($key == $_key) return [$_key => $value];
      if ($key == $value) return [$_key => $value];
    }
    return false;
  }


  private static function isValidPayload($payload): bool
  {
    return $payload instanceof Arrayable || $payload instanceof stdClass || is_array($payload);
  }


  private static function convertDatesToJalali($payload, $dateFields)
  {
    if (!self::isValidPayload($payload)) return $payload;

    $payload = collect($payload);
    $payload = $payload->map(function ($item, $index) use ($dateFields) {
      if ($item instanceof Arrayable || $item instanceof stdClass || is_array($item)) $item = self::convertDatesToJalali($item, $dateFields);
      else if (self::hasIndex($dateFields, $index) || $item instanceof Carbon) $item = self::silentConvetDate($item, self::hasIndex($dateFields, $index), $index);
      return $item;
    });
    return $payload;
  }


  private static function silentConvetDate(Carbon|string $possibleDate, array|bool $type, $index): string|null
  {
    try {
      $result = Carbon::parse($possibleDate);
      if (@$type[$index] == "ago") return getAgoJalali($result);
      else return convertToJalali($result, @$type[$index]);
    } catch (InvalidFormatException|TypeError) {
      return $possibleDate;
    }
  }

}
