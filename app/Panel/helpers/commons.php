<?php

use App\Panel\Auth\AuthCommons;
use App\Panel\Date\Jalalian;
use App\Panel\Date\XDate\JalaliTimeBuilder;
use App\Panel\helpers\XDateHelper;
use App\Panel\helpers\XStringHelper;
use App\Panel\Kernal\XConfigurator;
use App\Panel\Language\Language;
use App\Panel\Singleton\XOwn;
use Carbon\Exceptions\InvalidFormatException;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Str;


function setSession($key, $value): void
{
  request()->session()->put($key, $value);
}

function removeSession($key): void
{

  request()->session()->remove($key);
}

function isInArray($array, $string): bool
{
  foreach ($array as $row) if ($row == $string) return true;
  return false;
}


function getSession($key)
{
  return request()->session()->get($key);
}


function hasArrayIndex($array, $index): bool
{
  if (!is_array($array)) return false;
  foreach ($array as $row) if ($index == $row) return true;
  return false;
}


function xEscapeHtml($html): string
{
  return preg_replace("/<[^>]*>/", "", $html);
}

function xSubStr($string, $start, $end): string
{
  return Str::substr($string, $start, $end);
}


function getXFirstIndexKey($array)
{
  foreach ($array as $key => $row) return $key;
  return null;
}


function getXFirstIndex($array)
{
  foreach ($array as $row) return $row;
  return null;
}


function getAdminPrefix()
{
  $default = getConfigurator()->prefix();
  $config = XConfigurator::$config;
  if (is_array($config)) {
    if (isset($config['prefix'])) {
      if ($config['prefix'] != null) $default = $config['prefix'];
    }
  }
  return $default;
}


function getRouteConfigs(): array
{
  $default = [
    'prefix' => getAdminPrefix(), 'namespace' => '\\App\\Panel\\Dynamic', "custom_controller_namespace" => "\\App\\Http\\Controllers\\Admin"
  ];

  if (XConfigurator::$config != null) {
    foreach (XConfigurator::$config as $key => $value) $default[$key] = $value;
  }
  return $default;
}

function buildAdminConfigs(): array
{
  return array_merge(getRouteConfigs(), ['namespace' => "\App\Panel\Dynamic", "middleware" => getConfigurator()->getMiddlewares()]);
}


function xStrlen($string): int
{
  if ($string == null)
    return 0;
  return mb_strlen($string, 'UTF-8');
}

function getSiteUrl(): string
{
  return request()->getSchemeAndHttpHost();
}


function isAdmin(): bool
{
  return XOwn::init();
}

function getLatestArrayKey($array)
{
  if (!is_array($array)) return null;
  $i = 0;
  foreach ($array as $key => $row) {
    $i++;
    if (count($array) == $i) return $key;
  }
  return null;
}


function getXCondition($key)
{
  $result = getXRequest("x-conditions");
  if ($result == null) return null;
  return @$result[$key];
}


function buildRoute($url): string
{
  if (getConfigurator()->isDashboardProject()) return "/" . $url;

  if (XStringHelper::startWith($url, "/")) {
    return getConfigurator()->prefix() . $url;
  }
  return "/" . getConfigurator()->prefix() . "/" . $url;
}

function user(): AuthCommons
{
  return AuthCommons::getInstance();
}


function getLanguage(): string
{
  if (auth()->check()) {
    $key = auth()->user()->id . "_lang";
    try {
      return cache()->get($key);
    } catch (Exception|\Psr\Container\NotFoundExceptionInterface $exception) {
      return getConfigurator()->getDefaultlanguage();
    }
  }
  return getConfigurator()->getDefaultlanguage();
}


function xTranslate($key)
{
  return Language::get($key, null, "dashboard");
}


function getXDirection()
{
  return Language::getDirection();
}

function xTag(): \App\Panel\helpers\XTagHelper
{
  return \App\Panel\helpers\XTagHelper::getInstance();
}


if (!function_exists('jdate')) {

  function jdate($str = null): Jalalian
  {
    return Jalalian::forge($str);
  }
}


function xDate($date = null): JalaliTimeBuilder
{
  return \App\Panel\Date\XDate\DateHelper::builder($date);
}

function setPage($page): void
{
  Paginator::currentPageResolver(function () use ($page) {
    return $page;
  });
}


function convertToGregory($timestamp, $format = "Y-m-d H:i:s", $separator = "/"): string
{
  return XDateHelper::convertToGregory($timestamp, $format, $separator);
}

function convertToJalali($timeStamp, $format = "Y/m/d H:i:s", $convertToPersion = false): string
{
  try {
    return XDateHelper::convertToJalali($timeStamp, $format, $convertToPersion);
  } catch (Exception|InvalidFormatException $exception) {
    return "";
  }
}


function getAgoJalali($timeStamps = null): string|null
{
  if ($timeStamps == null) return $timeStamps;
  return XDateHelper::getAgoJalali($timeStamps);
}


function createSlug($model, $slug, $field = "slug", $unique = false): string
{
  return SlugService::createSlug($model, 'slug', $slug, ['unique' => $unique]);
}