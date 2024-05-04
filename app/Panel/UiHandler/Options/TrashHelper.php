<?php


namespace App\Panel\UiHandler\Options;


use App\Panel\Controllers\AdminController;
use App\Panel\helpers\XConditionsHelper;
use App\Panel\helpers\XPermissionHelper;
use App\Panel\Singleton\XModelSingleton;
use Illuminate\Database\Eloquent\SoftDeletes;

trait TrashHelper
{

  public function canViewTrash(): bool
  {
    if (XModelSingleton::getModel($this->model)::disable()->has("trash")) return false;
    $hasTrash = hasTrait($this->model, SoftDeletes::class);
    if ($hasTrash && $this->hasOption(XOptions::DEFAULT_OPTION_TRASH)) {
      return XPermissionHelper::can("trash",$this->model);
    }
    return false;
  }

  public function buildTrashOption():void
  {
    if ($this->canViewTrash()) {

      $additionalRoute = XConditionsHelper::create();
      if (strlen($additionalRoute) > 0) {
        $additionalRoute .= "&trash=true";
      } else {
        $additionalRoute .= "?trash=true";
      }



      $count=AdminController::$model::onlyTrashed()->count();
      $this->initializedOptions[] = XOption::getInstance()
        ->setLink( buildRoute(convertXModelToRoute($this->model)).$additionalRoute)
        ->setIcon("fa fa-trash")
        ->setType(XOptions::DEFAULT_OPTION_TRASH)
        ->setTitle("سطل زباله "  . " ( ".$count." ) ")
        ->build();
    }
  }

}
