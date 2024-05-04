<?php


namespace App\Panel\Menu;

use App\Models\Brand;
use App\Panel\helpers\ModelHelper;
use App\Panel\helpers\XPermissionHelper;
use App\Panel\helpers\XRouteHelper;
use App\Panel\Models\Notification;
use App\Panel\Models\Panel;
use App\Panel\Singleton\XModelSingleton;
use Illuminate\Database\Eloquent\SoftDeletes;

class XMenu
{
  public ?string $title = null;
  public ?string $pluralTitle = null;
  public ?string $url = null;
  public array $submenus = [];
  public ?bool $hasSubmenu = null;
  public ?string $icon = null;
  public ?string $arrow = null;
  public ?string $menuIconColor = null;
  public ?string $menuTextColor = null;
  public ?string $model = null;
  public ?array $permissions = null;
  public string $type = "menu";

  public function setType(string $type): XMenu
  {
    $this->type = $type;
    return $this;
  }

  public static function get(): XMenu
  {
    return new XMenu();
  }

  public function setModel($model): XMenu
  {
    $this->model = $model;
    return $this;
  }

  public static function createDefaultMenus($model): XMenu
  {


    $menu = new XMenu();
    $menu->model = $model;

    $model = XModelSingleton::getModel($model);


    $menu->setIcon($model->menuIcon);
    $menu->menuIconColor = $model->menuIconColor;
    $menu->menuTextColor = $model->menuTextColor;
    $menu->title = ModelHelper::getTitle($model);

//    if (getConfigurator()->loadmenuFromCache()) {
//      $menu->pluralTitle = XCacheMenus::getMenuPluralTitle($model);
//    } else {
//    }
    $menu->pluralTitle = ModelHelper::getPluralTitle($model);


    $menu->hasSubmenu = true;
    $menu->arrow = "fa fa-angle-left";
    $menu->url = "javascript:void(0)";
    $modelName = strtolower(ModelHelper::getName(get_class($model)));

    if ($model::disable()->isEnable("create") && XPermissionHelper::can("post", $modelName)) {
      $menu->submenus[] = self::buildSubMenu($model, "create");
    }

    if ($model::disable()->isEnable("index") && XPermissionHelper::can("view", $modelName)) {
      $menu->submenus[] = self::buildSubMenu($model, "index");
    }

    if ($model::disable()->isEnable("trash") && hasTrait($model, SoftDeletes::class) && XPermissionHelper::can("trash", $modelName)) {
      $menu->submenus[] = self::buildSubMenu($model, "trash");
    }

    $menu->initDefaults();

    return $menu;
  }

  private static function buildSubMenu($model, $type): XMenu
  {
    $menu = new XMenu();
    $menu->model = $model;
    if ($type == "create") {
      $menu->title = "افزودن یک مورد جدید";
      $menu->icon = "fa fa-pencil";
      $menu->url = buildDashboardPath(XRouteHelper::getRoute($model) . "/create");
    } else if ($type == "index") {
      $menu->title = "همه موارد ثبت شده";
      $menu->icon = "fa fa-list";
      $menu->url = buildDashboardPath(XRouteHelper::getRoute($model));
    } else if ($type == "trash") {
      $menu->title = "سطل بازیافت";
      $menu->icon = "fa fa-trash";
      $menu->url = buildDashboardPath(XRouteHelper::getRoute($model) . "?trash=true");
    }
    $menu->initDefaults();
    return $menu;
  }


  public function setTitle($title): XMenu
  {
    $this->title = $title;
    $this->pluralTitle = $title;
    return $this;
  }

  public function setSubmenus($subMenus): XMenu
  {
    if (!is_array($subMenus)) $subMenus = [];

    $records = [];
    foreach ($subMenus as $row) {
      if (!is_array($row->permissions)) $row->permissions = [];
      $can = true;

      foreach ($row->permissions as $row2) if (!hasPermission($row2)) $can = false;
      if ($can) $records[] = $row;
    }


    if (count($records) > 0)
      $this->hasSubmenu = true;
    $this->submenus = $records;
    return $this;
  }

  public function setUrl($url): XMenu
  {
    if (!is_string($url)) {
      $url = "javascript:void(0)";
    } else {
      $url = buildDashboardPath($url);
    }
    $this->url = $url;
    return $this;
  }

  public function setIcon($icon): XMenu
  {
    if ($this->type == "submenu" && $icon == null) {
      $this->icon = "fa fa-long-arrow-left";
    } else {
      $this->icon = $icon;
    }
    return $this;
  }

  public function setIconColor($color): XMenu
  {
    $this->menuIconColor = $color;
    return $this;
  }

  public function setTextColor($color): XMenu
  {
    $this->menuTextColor = $color;
    return $this;
  }


  public function setPermissions($permissions): XMenu
  {
    if (is_string($permissions)) $permissions = [$permissions];
    $this->permissions = $permissions;
    return $this;
  }

  public function build(): XMenu
  {
    $this->initDefaults();
    return $this;
  }

  private function initDefaults()
  {
    if ($this->arrow == null) {
      $this->arrow = "fa fa-angle-left";
    }
    if ($this->icon == null && $this->type == "menu") {
      $icon = XModelSingleton::getModel($this->model)->menuIcon;
      if ($icon == null) {
        $this->icon = "zmdi zmdi-view-dashboard";
      } else {
        $this->icon = $icon;
      }
    }
  }
}
