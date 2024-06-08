<?php

namespace App\Http\Controllers\Api\V1\Developers;

use App\Http\Controllers\Controller;
use Exception;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class IpInfoController extends Controller
{

  private const KEY = "ip_info_";

  private static function getKey($ip)
  {
    return self::KEY . $ip;
  }

  private static function pullToCache($data, $ip)
  {
    cache()->put(self::getKey($ip), $data, now()->addMinutes(30));
  }

  private static function getFromServer1($ip)
  {
    try {
      $result = file_get_contents("http://ip-api.com/json/" . $ip);
      $result = json_decode($result, true);
      return [
        "x-ip" => $ip,
        "x-isp" => $result["isp"],
        "x-timezone" => $result["timezone"],
        "x-country" => $result["country"],
        "x-country-code" => $result["countryCode"],
        "x-region-code" => $result["region"],
        "x-state" => $result["regionName"],
        "x-city" => $result["city"],
        "x-latitude" => $result["lat"],
        "x-longitude" => $result["lon"],
      ];
    } catch (Exception) {
      return false;
    }


  }

  private static function getFromServer2($ip)
  {
    try {

      $result = file_get_contents("https://api.ipbase.com/v1/json?ip=" . $ip);
      $result = json_decode($result, true);
      return [
        "x-ip" => self::getRequestIp(),
        "x-isp" => "unknown",
        "x-timezone" => $result["time_zone"],
        "x-country" => $result["country_name"],
        "x-country-code" => $result["region_code"],
        "x-region-code" => $result["region_code"],
        "x-state" => $result["region_name"],
        "x-city" => $result["city"],
        "x-latitude" => $result["latitude"],
        "x-longitude" => $result["longitude"],
      ];

    } catch (Exception $e) {
      return false;
    }

  }

  private static function requestAndCache($ip)
  {
    $data = self::getFromServer1($ip);
    if (!$data) {
      $data = self::getFromServer2($ip);
    }
    self::pullToCache($data, $ip);
    return $data;
  }

  private static function get($ip)
  {
    $cache = self::hasCache($ip);
    if (!$cache) $cache = self::requestAndCache($ip);
    return $cache;
  }

  private static function hasCache($ip)
  {
    try {
      $key = self::getKey($ip);
      return cache()->get($key);
    } catch (NotFoundExceptionInterface|ContainerExceptionInterface $e) {

    }

  }

  public static function getRequestIp()
  {
    return request()->header('X-Real-IP');
  }


  public function index()
  {
    try {

      $ip = request()->input("target");
      if (!$ip) $ip= self::getRequestIp();
      $type = request()->input("type");

      $ip = str_replace("https://", "", $ip);
      $ip = str_replace("http://", "", $ip);
      $ip = gethostbyname($ip);

      cache()->clear();


      $result = self::get($ip);

      if ($type == "prety") {
        return apiResponse()->success([
          "data" => apiResponse()->success($result),
          "ip" => $ip
        ]);
      }

      return apiResponse()->success([
        "data" =>$result
      ]);

    } catch (Exception $e) {
      $record = [
        "status" => false,
        "payload" => [
          "data" => []
        ]
      ];
    }

  }
}
