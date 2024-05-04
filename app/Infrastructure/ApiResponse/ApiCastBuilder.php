<?php

namespace App\Infrastructure\ApiResponse;


class ApiCastBuilder
{
  private ApiDataStore $apiDataStore;


  public static function getInstance(ApiDataStore $apiDataStore): ApiCastBuilder
  {
    $instance = new ApiCastBuilder();
    $instance->apiDataStore = $apiDataStore;
    return $instance;
  }

  public function build($isResponse = true)
  {
    $result = @ApiDateBuilder::getInstance()->buildDate($this->apiDataStore->getDateFields(), $this->apiDataStore)[0];
    $success = $this->apiDataStore->getSuccess();

    $data = [
      "status" => $this->apiDataStore->getStatusCode(),
      "success" => $success,
      "payload" => $result,
    ];

    if (!$success) {
      $data["message"] = $this->apiDataStore->getMessage();
    }

    return $isResponse ? $data : $result;
  }


}
