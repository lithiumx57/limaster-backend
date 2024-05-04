<?php

namespace App\Panel;

include_once app_path("Panel/helpers/loader.php");

use App\Panel\Kernal\DefaultConfigurator;
use App\Panel\Kernal\IConfigurator;
use App\Panel\Kernal\XConfigurator;


class XDashboard
{
  private static null|IConfigurator $iConfigurator = null;

  public static function initialize(IConfigurator|null $iConfigurator = null)
  {
    if ($iConfigurator == null) $iConfigurator = new DefaultConfigurator();
    self::$iConfigurator = $iConfigurator;
    if (self::isAdminRoute()) XConfigurator::prepareAutoLoad();
  }

  public static function getConfigurator(): IConfigurator
  {
    return self::$iConfigurator;
  }


//  public static function onlyRender(array $fields, $callbackUrl = "", $includeHeader = false)
//  {
//    XConfigurator::prepareAutoLoad();
//    return view("only-renderer.index", compact("fields", "callbackUrl"));
//  }


  private static function isAdminRoute(): bool
  {
    if (self::getConfigurator()->isDashboardProject()) return true;
    $uri = request()->getRequestUri();
    $uri = explode("/", $uri);
    return @$uri[1] == self::getConfigurator()->prefix();
  }

}
