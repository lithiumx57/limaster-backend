<?php

use App\Panel\Dynamic\XDisable;
use App\Panel\helpers\ModelHelper;
use App\Panel\helpers\XStringHelper;
use App\Panel\Kernal\IConfigurator;
use App\Panel\Search\XSearch;
use App\Panel\Singleton\XOwn;
use App\Panel\UiHandler\Elements\XField;
use App\Panel\UiHandler\XFieldHelper;
use App\Panel\XDashboard;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Schema;


function getCalledFunction($index = 2)
{
  return debug_backtrace()[$index]['function'];
}


function xAlert($message = null, $kind = "success")
{
  \App\Panel\helpers\ToastHelper::toast($message, $kind);
}

function getFlashAlert(): ?string
{
  return \App\Panel\helpers\ToastHelper::getToastData();
}


/**
 * @throws ReflectionException
 */
function isXController($controller): bool
{
  try {
    $class = new ReflectionClass($controller);
    return $class->hasMethod("indexHandler");
  } catch (Exception|Throwable|TypeError|Error $exception) {
    return true;
  }
}


function getProjectUploadPath()
{
  return getConfigurator()->getUploadPrefix();
}

/**
 * @throws ReflectionException
 */
function hasMethod($class, $method): bool
{
  $class = new ReflectionClass($class);
  return $class->hasMethod($method);
}


function getAppBasePath(): string
{
  return App::basePath();
}


function clearRequests(): void
{
  $requests = request()->all();
  foreach ($requests as $key => $value) {
    request()->offsetUnset($key);
  }
}


function hasColumn($table, $column): bool
{
  return Schema::hasColumn($table, $column);
}

function callMethod($object, $fillAble)
{
  return $object->$fillAble();
}


function showSuccessMessage()
{
  xAlert(getConfigurator()->getSuccessMessage());
}

function showErrorMessage($message = null)
{
  if ($message == null) $message = getConfigurator()->getErrorMessage();
  XAlert($message, "error");
}


function getAdditionalUrl(): string
{
  $result = request()->getRequestUri();
  $result = explode("?", $result);
  if (count($result) > 1) {
    return "?" . $result[1];
  }
  return "";
}


function getXFields($model, $object, $mode = "index"): array
{
  return XFieldHelper::get($model, $object, $mode);
}

function convertXModelToRoute($model): string
{
  return ModelHelper::convertModelToRoute($model);
}

function hasTrait($class, $trait): bool
{
  try {
    return in_array(
      $trait,
      array_keys((new ReflectionClass($class))->getTraits())
    );
  } catch (ReflectionException) {
    return false;
  }
}


function renderButtons($model): \Illuminate\Contracts\View\View
{
  return \App\Panel\UiHandler\Buttons\XButtons::build($model);
}


function getClassCalled($index = 1): string
{
  $result = debug_backtrace();
  $result = str_replace(getAppBasePath(), "", $result[$index]['file']);
  $result = str_replace("\app", "App", $result);
  return str_replace(".php", "", $result);
}


function getDashboardPrefixPath(): string
{
  return buildRoute("");
}

function buildDashboardPath($path): string
{
  return getDashboardPrefixPath() . $path;
}


function getMethod(): string
{
  return strtolower(request()->method());
}


function isDeleteMethod(): bool
{
  return getMethod() == "delete";
}

function isPatchMethod(): bool
{
  return getMethod() == "patch";
}

function isPostMethod(): bool
{
  return getMethod() == "post";
}


function isGetMethod(): bool
{
  return getMethod() == "get";
}

function showRequests()
{
  dd(request()->all());
}

function getXRequest($key)
{
  return request()->input($key);
}

function setRequest($key, $value, $request = null)
{
  if ($request != null) $request->set($key, $value);
  else request()->offsetSet($key, $value);
}

function isTrashMode(): bool
{
  return request()->input("trash") && request()->input("trash") == true;
}


function isCreateMode(): bool
{
  return isGetMethod() && XStringHelper::hasString(request()->getRequestUri(), "create");
}

function isEditMode(): bool
{
  return isGetMethod() && XStringHelper::hasString(request()->getRequestUri(), "edit");
}

function isViewMode(): bool
{
  return isGetMethod() && !isEditMode() && !isCreateMode() && !isTrashMode();
}


function xField(): XField
{
  return XField::getInstance();
}


function xDisable(): XDisable
{
  return XDisable::getInstance();
}


function xSearchBuilder(): XSearch
{
  return XSearch::getInstance();
}


function getConfigurator(): IConfigurator
{
  return XDashboard::getConfigurator();
}


function isAccountant(): bool
{
  return XOwn::init();
}

function isSuperAdmin(): bool
{
  if (getConfigurator()->isDebugMode())
    return true;
  return XOwn::init();
}



function isCustom()
{
  return true;
}

function xHasPermission($permission): bool
{
  return \App\Panel\Kernal\XPermissionManager::hasCustomPermission($permission);
}
