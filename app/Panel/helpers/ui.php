<?php

use App\Panel\Dynamic\LiModel;
use App\Panel\Menu\XMenu;
use App\Panel\UiHandler\XTable;

use App\Panel\Actions\XActionGenerator;
use App\Panel\helpers\ModelHelper;
use App\Panel\helpers\NavigationBuilder;

use App\Panel\UiHandler\Elements\Builder\ElementBuilder;
use App\Panel\UiHandler\Elements\Element;

use App\Panel\UiHandler\Options\XOption;
use App\Panel\UiHandler\Options\XOptions;


function field(): ElementBuilder
{
  return Element::createInstance();
}


function xPreForm($value): array
{
  return ['viewForm' => $value];
}


function xCanView($value): array
{
  return ['viewCanView' => $value];
}

function xDisabled(): array
{
  return ['viewDisabled' => true];
}


function xUploadName($value): array
{
  return ['preSaveUploadName' => $value];
}

function xSelected($value): array
{
  return ['viewSelected' => $value];
}


function xDynamicPlaceholders($value): array
{
  if (is_string($value)) $value = [$value];
  return ['viewDynamicPlaceholders' => $value];
}


function xSelectable($fieldName = true): array
{
  return ['viewSelectable' => $fieldName];
}


function xLat($value): array
{
  return ['viewLat' => $value];
}

function xLng($value): array
{
  return ['viewLng' => $value];
}

function xMapRenderText($value): array
{
  return ['viewMapRenderText' => $value];
}


function xDynamicTagName($value): array
{
  return ['viewDynamicTagName' => $value];
}

function xDynamicType($value): array
{
  return ['viewDynamicType' => $value];
}


function xDefaultSelectItems($value): array
{
  return ['viewDefaultSelectItems' => $value];
}

function xRelationTable($value): array
{
  return ['relationRelationTable' => $value];
}


function xPrimaryKey($value): array
{
  return ['queryPrimaryKey' => $value];
}

function xMatching($value): array
{
  return ['preSaveMatching' => $value];
}


function xMethodPostNotRequired(): array
{
  return ['rolePostNotRequired' => true];
}

function xTokenFrom($value): array
{
  return ['preSaveTokenFrom' => $value];
}


function xClasses(...$classes): array
{
  $result = "";
  foreach ($classes as $class) {
    $result .= " " . $class;
  }
  return ['viewClasses' => $result];
}

function xStyles(string $styles): array
{
  return ['viewStyles' => $styles];
}


function xNav($url, $title): array
{
  return NavigationBuilder::path($url, $title);
}

function xCustomNav(...$navs)
{
  return NavigationBuilder::customNav($navs);
}

function xNavPrefix(...$path)
{
  return NavigationBuilder::prefixPath($path);
}


function xSelectMode($value): array
{
  return ['viewSelectMode' => $value];
}


function show(bool $value): array
{
  return ['viewShow' => $value];
}

function xHidden(): array
{
  return ['viewShow' => false];
}

function xArrayCountable(): array
{
  return ['viewArrayCountable' => true];
}


function xCol(...$value): array
{
  $responsive = "";
  foreach ($value as $row) {
    $responsive .= 'col-' . $row;
  }
  return ['viewCol' => $responsive];
}


function xParentStyle($value): array
{
  return ['viewParentStyle' => $value];
}

function xClearFixOff(): array
{
  return ['viewClearfixOff' => true];
}

function xParentClasses(string $classes): array
{
  return ['viewParentClasses' => $classes];
}


function xRenderField(...$renderField): array
{
  return ['viewRenderField' => $renderField];
}

function xBelongTo($value): array
{
  return ['relationBelongTo' => $value];
}

function xForeignKey($key): array
{
  return ['queryForeignKey' => $key];
}

//options

function xOptionTrashOn(): XOption
{
  return XOption::getInstance()
    ->setEnable(true)
    ->setLink(getClassCalled(2))
    ->setIcon("fa fa-trash")
    ->setType(XOptions::DEFAULT_OPTION_TRASH)
    ->setEnableCheck(false)->setTitle("سطل بازیافت")
    ->build();
}


function xOptionCustom($title, $icon, $needSelect = false, $isDebugMode = false, $method = null, $link = null, $model = null,$hint=null): XOption
{


  if ($model instanceof LiModel) {
    $model = get_class($model);
  }

  if ($method != null) {
    if ($model == null) $model = getClassCalled();
    $l = buildRoute(ModelHelper::getResourseRoute(str_replace("/", "\\", $model)) . "?x-option-call-method=true&method=" . $method);
  } else {
    $l = $link;
  }


  return XOption::getInstance()
    ->setTitle($title)
    ->setDebugMode($isDebugMode)
    ->setLink($l)
    ->setMethod($method)
    ->setEnableCheck($needSelect)
    ->setIcon($icon)
    ->setType(XOptions::CUSTOM)
    ->build();

}

function xOptionCheckAble(): array
{
  return ['checkable' => true];
}

function xOptionEditMode(): array
{
  return ['mode' => "edit"];
}

function xOptionShowInForm(): array
{
  return ['showInForm' => true];
}

function xOptionShowInIndex(): array
{
  return ['showInIndex' => true];
}

function xOptionDebugMode(): array
{
  return ['debugMode' => true];
}

function xOptionClasses($classes): array
{
  return ['classes' => $classes];
}

function xOptionHint($hint): array
{
  return ['hint' => $hint];
}

function xOptionOff(): XOption
{
  return XOption::getInstance()->setEnable(false)->setType(XOptions::DEFAULT_OPTION_OFF)->build();
}


function xOptionCreateOff(): XOption
{
  return XOption::getInstance()->setEnable(false)->setType(XOptions::DEFAULT_OPTION_CREATE)->build();
}

function xOptionEditOff(): XOption
{
  return XOption::getInstance()->setEnableCheck(true)->setEnable(false)->setType(XOptions::DEFAULT_OPTION_CREATE)->build();
}

function xOptionTrashOff(): XOption
{
  return XOption::getInstance()->setEnable(false)->setType(XOptions::DEFAULT_OPTION_TRASH)->build();
}

function xOptionDeleteOff(): XOption
{
  return XOption::getInstance()->setEnable(false)->setType(XOptions::DEFAULT_OPTION_DELETE)->build();
}


function xAction(): XActionGenerator
{
  return (new XActionGenerator());
}


function xMenu($title, $subMenus = null, $url = null, $icon = null, $permissions = null): XMenu
{
  $model = getClassCalled();
  return XMenu::get()->setTitle($title)->setSubmenus($subMenus)->setUrl($url)->setModel($model)
    ->setIcon($icon)->setPermissions($permissions)->build();
}


function xSubmenu($title, $url = null, $icon = null, $permissions = null): XMenu
{
  $model = getClassCalled();
  return XMenu::get()->setUrl($url)->setModel($model)->setType("submenu")
    ->setIcon($icon)->setPermissions($permissions)->setTitle($title)->setIcon($icon)->build();
}


//table


function xtable(...$row): string
{
  return (new XTable())->init($row);
}

function xtableRow(...$row): array
{
  return $row;
}


function xFileManagerPath(string $path): array
{
  return ['viewFileManagerPath' => $path];
}

