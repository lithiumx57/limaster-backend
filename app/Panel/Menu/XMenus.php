<?php


namespace App\Panel\Menu;
use App\Panel\helpers\ModelHelper;
use App\Panel\helpers\XPermissionHelper;
use App\Panel\Models\Panel;
use App\Panel\Singleton\XModelSingleton;

class XMenus
{


  private static function getMenu($classPath): XMenu|null
  {
    if (!XPermissionHelper::can("all", $classPath)) return null;
    $xModel = XModelSingleton::getModel($classPath);
    if ($xModel->xMenuOff()) return null;
    $xMenus = $xModel->menu();
    if ($xMenus == null) $menu = XMenu::createDefaultMenus($classPath);
    else $menu = $xMenus;

    return $menu;
  }

  public static function getMenus(): array
  {
    $menus = [];
    $menus[] = self::getMenu(Panel::class);

    foreach (ModelHelper::getModels() as $model) {
      $model = $model['class_path'];
      if ($model == Panel::class) continue;
      $result = self::getMenu($model);
      if ($result) $menus[] = $result;
    }

    return $menus;
  }
}
