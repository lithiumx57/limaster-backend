<?php

namespace App\Infrastructure\ApiResponse\Facade;


use App\Infrastructure\ApiResponse\ApiCastBuilder;
use App\Infrastructure\ApiResponse\ApiDataStore;
use App\Infrastructure\ApiResponse\ApiResponseStatuses;

class ApiResponseHelper
{
  private ApiDataStore $apiDataStore;

  public static function getInstance(): ApiResponseHelper
  {
    $instance = new ApiResponseHelper();
    $instance->apiDataStore = new ApiDataStore();
    return $instance;
  }

  public function hasNoAccess()
  {
    return $this->setStatus(ApiResponseStatuses::STATUS_HAS_NO_ACCESS)->build();
  }


  public function unAuthorized()
  {
    return $this->setStatus(ApiResponseStatuses::STATUS_TOKEN_EXPIRE)->build();
  }


  public function abortWithMessage($statusCode, $message)
  {
    return $this->setStatus($statusCode)->setMessage($message)->build();
  }

  public function validationError($message)
  {
    return $this->setStatus(ApiResponseStatuses::STATUS_VALIDATION_ERROR)->setMessage($message)->build();
  }

  public function exception($message, $code = -1)
  {
    if ($code === -1) {
      $code = ApiResponseStatuses::STATUS_ERROR;
    }

    return $this->setStatus($code)->setMessage($message)->build();
  }


  public function success($data = [])
  {
    return $this->setData($data)->build();
  }

  public function setMessage($message): ApiResponseHelper
  {
    $this->apiDataStore->setErrorMessage($message);
    return $this;
  }

  public function setData($data): ApiResponseHelper
  {
    $this->apiDataStore->addData($data);
    return $this;
  }

  public function setStatus($statusCode = ApiResponseStatuses::STATUS_OK): ApiResponseHelper
  {
    $this->apiDataStore->setStatusCode($statusCode);
    return $this;
  }

  public function setDateFields(...$date): ApiResponseHelper
  {
    if (is_array(@$date[0])) $date = $date[0];
    foreach ($date as $key => $value) $this->apiDataStore->addDate($key, $value);
    return $this;
  }

  public function setPriceFields(...$prices): ApiResponseHelper
  {
    if (is_array(@$prices[0])) $prices = $prices[0];
    foreach ($prices as $row) $this->apiDataStore->addPrice($row);
    return $this;
  }

  public function build($isResponse = true)
  {
    return ApiCastBuilder::getInstance($this->apiDataStore)->build($isResponse);
  }


}
