<?php

namespace App\Infrastructure\ApiResponse;

use Carbon\Carbon;
use Illuminate\Contracts\Support\Arrayable;
use stdClass;

class ApiPriceBuilder
{
  public static function getInstance(): ApiPriceBuilder
  {
    return new ApiPriceBuilder();
  }

  public function buildPrice(array $prices, ApiDataStore $store)
  {
    $payload = collect($store->getData());
    $payload = $payload->map(function ($item, $index) use ($prices) {
      if ($item instanceof Arrayable || $item instanceof stdClass || is_array($item)) $item = $this->buildPrice($item, $prices);
      else if (self::hasIndex($prices, $index)) {
        dd("ok");
      }

      return $item;
    });
    return $payload;
  }


  private static function hasIndex($prices, $key): bool|array
  {
    return in_array($prices, $key);
  }

  private static function isValidPayload($payload): bool
  {
    return $payload instanceof Arrayable || $payload instanceof stdClass || is_array($payload);
  }


}
