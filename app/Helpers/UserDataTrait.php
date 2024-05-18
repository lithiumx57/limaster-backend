<?php

namespace App\Helpers;

trait UserDataTrait
{

  public function getData($key = null, $default = null)
  {
    if (!is_string($key)) return $default;

    $result = explode(",", $key);

    $userData = $this->data;
    if (!is_array($userData)) $userData = [];
    $temp = $userData;

    foreach ($result as $row) {
      if (!isset($temp[$row])) return $default;
      $temp = $temp[$row];
    }
    return $temp;
  }


  public function attachData($key, $value):void  {
    $data = $this->data;
    if (!$data) $data = [];
    $keys = explode(',', $key);
    $temp = &$data;

    foreach ($keys as $k) {
      if (!isset($temp[$k])) $temp[$k] = [];
      $temp = &$temp[$k];
    }
    $temp = $value;
    $this->update(["data" => $data]);
  }


}