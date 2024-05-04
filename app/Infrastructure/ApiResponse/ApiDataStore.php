<?php

namespace App\Infrastructure\ApiResponse;

use App\ApiCaster\DefaultBlogResponse\ApiErrorResponse;

class ApiDataStore
{
  private array $dateFields = [];
  private array $priceFields = [];
  private array $data = [];
  private int $statusCode = ApiResponseStatuses::STATUS_OK;
  private string|null $errorMessage = null;

  public function addDate($key, $value): void
  {
    $this->dateFields[$key] = $value;
  }

  public function setStatusCode($statusCode = ApiResponseStatuses::STATUS_OK): void
  {
    $this->statusCode = $statusCode;
  }

  public function setErrorMessage($errorMessage): void
  {
    $this->errorMessage = $errorMessage;
  }

  public function getErrorMessage(): string|null
  {
    return ApiResponseStatuses::getMessage($this->getStatusCode());
  }

  public function getMessage(): string|null
  {
    if ($this->errorMessage == null) {
      $error = ApiResponseStatuses::getMessage($this->statusCode);
      if ($error) return $error;
      return "خطای نامشخص";
    }
    return $this->errorMessage;
  }


  public function getStatusCode(): int
  {
    if ($this->statusCode > 0) {
      return $this->statusCode;
    }
    return 200;
  }


  public function addPrice($price): void
  {
    $this->priceFields[] = $price;
  }

  public function addData($data): void
  {
    $this->data[] = $data;
  }

  /**
   * @return array
   */
  public function getDateFields(): array
  {
    return $this->dateFields;
  }

  /**
   * @return array
   */
  public function getPriceFields(): array
  {
    return $this->priceFields;
  }

  /**
   * @return array
   */
  public function getData(): array
  {
    return $this->data;
  }

  public function getSuccess(): bool
  {
    if ($this->statusCode > 399 && $this->statusCode < 500) {
      return false;
    } else if ($this->statusCode > 199 && $this->statusCode < 300) {
      return true;
    }
    return false;
  }


}
