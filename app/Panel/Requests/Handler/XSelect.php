<?php

namespace App\Panel\Requests\Handler;

use App\Panel\helpers\ModelHelper;
use App\Panel\helpers\XPermissionHelper;

class XSelect
{
  public static function init()
  {

    $value = getXRequest("value");
    $field = getXRequest("field");
    $model = str_replace("/", "\\", getXRequest("model"));
    $recordId = getXRequest("recordId");
    $method = getXRequest("method");
    $isMethod = getXRequest("isMethod");

    $createdPermission = "can-change-" . strtolower(ModelHelper::getName($model)) . "-" . $field;


    $record = $model::find($recordId);
    if (!($record instanceof $model)) return self::throwError(getConfigurator()->getErrorMessage());
    if (!(self::hasPermissionToChange($createdPermission, $model, $field, $record))) return self::throwError("شما دسترسی لازم برای تغییر این فیلد را ندارید");


    $result = $record->update([
      $field => $value
    ]);

    if ($result) {
      return [
        "status" => true,
        "message" => getConfigurator()->getSuccessMessage()
      ];
    } else {
      return self::throwError(getConfigurator()->getSuccessMessage());
    }

  }

  private static function throwError($message)
  {
    return [
      "status" => false,
      "message" => $message
    ];
  }

  private static function hasPermissionToChange($createdPermission, $model, $field, $record)
  {
    $validRow = null;
    foreach ($record->actions() as $row) {
      foreach ($row->permissions as $permission) {
        if ($permission == $createdPermission) {
          $validRow = $row;
        }
      }
    }

    if ($validRow == null) {
      return true;
    }

    foreach ($validRow->permissions as $permission) {
      if (!XPermissionHelper::hasCustomPermission($permission)) {
        return false;
      }
    }

    return true;
  }
}
