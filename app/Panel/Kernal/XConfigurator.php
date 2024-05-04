<?php

namespace App\Panel\Kernal;

include_once app_path("Panel/helpers/loader.php");

class XConfigurator
{
  public static ?string $model = null;
  public static ?array $config = [];

  public static function auth(): bool
  {
    \App\Panel\Auth\AuthConfigurator::releaseGates();
    return \App\Panel\Auth\AuthConfigurator::checkUserPermissions(self::$model);
  }


  public static function prepareAutoLoad()
  {
    DashboardKernal::requireDashboardRouter();
    DashboardKernal::injectPanelViews();
    DashboardKernal::prepareCacheSystem();
  }
}
