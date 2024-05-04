<?php

namespace App\Infrastructure\ApiResponse;

use Carbon\Carbon;
use Carbon\Exceptions\InvalidFormatException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use stdClass;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class CastJson
{


  public static function getInstance()
  {
    return new CastJson();
  }


  public static function processException(Throwable $e): JsonResponse
  {
    $code = $e->getCode();

    if ($e instanceof ValidationException) {
      $code = 400;
    } else if ($e instanceof AuthenticationException) {
      $code = 401;
    } else if ($e instanceof ModelNotFoundException) {
      $code = 404;
    }

    return static::get(null, $e->getMessage(), $code);
  }

  private static function silentConvetDate($possibleDate)
  {
    try {
      return getAgoJalali(Carbon::parse($possibleDate));
    } catch (InvalidFormatException $exception) {
      return $possibleDate;
    }
  }

  private static function convertDatesToJalali($payload)
  {
    $dateFields = [
      'created_at',
      'updated_at',
      'expire_at',
      'deleted_at',
      'failed_at',
      'received_at',
      'last_update',
    ];

    if ($payload instanceof Arrayable || $payload instanceof stdClass || is_array($payload)) {
      $payload = collect($payload);

      $payload = $payload->map(function ($item, $index) use ($dateFields) {

        if ($item instanceof Arrayable || $item instanceof stdClass || is_array($item)) {
          $item = self::convertDatesToJalali($item);
        } else if ($item instanceof Carbon) {
          $item = getAgoJalali($item);
        } else {
          if (in_array($index, $dateFields)) {
            $item = self::silentConvetDate($item);
          }
        }

        return $item;
      });
    }
    return $payload;
  }

  public static function get($payload, $error = null, $statusCode = 200): JsonResponse
  {
    $payload = self::convertDatesToJalali(response()->json($payload)->getData());

    $statusCode = isset(Response::$statusTexts[$statusCode]) ? $statusCode : 500;
    return response()->json([
      'success' => $statusCode == 200 && empty($error),
      'status' => $statusCode,
      'payload' => $payload,
      'error' => $error,
    ], $statusCode);
  }
}
