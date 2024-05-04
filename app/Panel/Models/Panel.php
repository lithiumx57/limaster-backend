<?php

namespace App\Panel\Models;

use App\Panel\Dynamic\LiModel;
use App\Panel\Dynamic\XDisable;
use App\Panel\Menu\XMenu;

class Panel extends LiModel
{
//  protected bool $isTableOff = true;
//  protected bool $cancelButton=false;
//  protected bool $saveAndBackButton=false;

//  public bool $activeSearch=false;

//  public static array $customPermissions=[
//    "view-month-chart"=>"نمودار فروش روزانه"
//  ];

//  public static ?string $route="panel";

//  protected ?string $title = 'داشبورد';

  public function menu(): ?XMenu
  {
    return xMenu("داشبورد",[],'panel');
  }


//  public static function getIndexView(): string
//  {
//    if (getConfigurator()->isDebugMode()) return "panel.debug";
//    return getConfigurator()->getDashboardViewPath();
//  }


  public static function disable(): XDisable
  {
    return xDisable()->delete()->trash()->restore()->copy()->create()->edit();
  }


}
