<?php

namespace App\Http\Controllers\Api\V1\Developers;

use App\Http\Controllers\Controller;
use Exception;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class IpInfoController extends Controller
{

  private const KEY = "ip_info_";

  private static function getKey()
  {
    return self::KEY . request()->ip();
  }

  private static function pullToCache($data)
  {
    cache()->put(self::getKey(), $data, now()->addMinutes(30));
  }

  private static function getFromServer1()
  {
    try {
      $result = file_get_contents("http://ip-api.com/json/" . "176.126.120.11");
      $result = json_decode($result, true);
      return [
        "status" => true,
        "payload" => [
          "x-ip" => request()->ip(),
          "x-isp" => $result["isp"],
          "x-timezone" => $result["timezone"],
          "x-country" => $result["country"],
          "x-country-code" => $result["countryCode"],
          "x-region-code" => $result["region"],
          "x-state" => $result["regionName"],
          "x-city" => $result["city"],
          "x-latitude" => $result["lat"],
          "x-longitude" => $result["lon"],
        ]
      ];
    } catch (Exception) {
      return false;
    }


  }

  private static function getFromServer2()
  {
    try {
      $result = file_get_contents("https://api.ipbase.com/v1/json?ip=" . "176.126.120.11");
      $result = json_decode($result, true);
      return [
        "status" => true,
        "payload" => [
          "x-ip" => request()->ip(),
          "x-isp" => "unknown",
          "x-timezone" => $result["time_zone"],
          "x-country" => $result["country_name"],
          "x-country-code" => $result["region_code"],
          "x-region-code" => $result["region_code"],
          "x-state" => $result["region_name"],
          "x-city" => $result["city"],
          "x-latitude" => $result["latitude"],
          "x-longitude" => $result["longitude"],
        ]
      ];

    } catch (Exception $e) {
      return false;
    }

  }

  private static function requestAndCache()
  {
    $data = self::getFromServer1();
    if (!$data) {
      $data = self::getFromServer2();
    }
    self::pullToCache($data);
    return $data;
  }

  private static function get()
  {
    $cache = self::hasCache();
    if (!$cache) $cache = self::requestAndCache();
    return $cache;
  }

  private static function hasCache()
  {
    try {
      $key = self::getKey();
      return cache()->get($key);
    } catch (NotFoundExceptionInterface|ContainerExceptionInterface $e) {

    }
  }

  public function index()
  {

    try {
      $result = self::get();
      $type = request()->input("type");
      if ($type == "prety") {
        $json_string = json_encode($result, JSON_PRETTY_PRINT);
        echo  "<pre style='color: #fff;font-size: 22px'>".str_replace("\\/","/",$json_string)."</pre>";
        return ;
      } else {
        return $result;
      }


    } catch (Exception $e) {
      $record = [
        "status" => false,
        "payload" => [
        ]
      ];
    }

  }
}
