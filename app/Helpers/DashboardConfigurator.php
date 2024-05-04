<?php

namespace App\Helpers;

use App\Panel\Kernal\DefaultConfigurator;

class DashboardConfigurator extends DefaultConfigurator
{

  public function isDebugMode(): bool
  {
    return true;
  }

  public function prefix(): string
  {
    return "";
  }

  public function isDashboardProject(): bool
  {
    return true;
  }

  public function getPages(): array
  {
    return [
      "home" => 'صفحه اصلی',
      "blog" => 'وبلاگ',
    ];
  }

  public function getUpdateServer(): string
  {
    return "http://panel.local";
  }


}
