<?php

namespace App\Infrastructure\ApiResponse;

class ApiResponseStatuses
{
  public const  STATUS_OK = 200;
  public const  STATUS_TOKEN_EXPIRE = 422;
  public const  STATUS_VALIDATION_ERROR = 501;
  public const  STATUS_ERROR = 500;
  public const  STATUS_HAS_NO_ACCESS = 403;

  public const ERROR_MESSAGES = [
    self::STATUS_TOKEN_EXPIRE => "خطا در احراز هویت",
    self::STATUS_VALIDATION_ERROR => "خطای اطلاعات ورودی",
    self::STATUS_ERROR => "خطای نامشخص",
    self::STATUS_HAS_NO_ACCESS => "Unauthorized",
  ];


  public static function getMessage(int $status): string|null
  {
    return @self::ERROR_MESSAGES[$status];
  }


}
