<?php


namespace App\Panel\UiHandler\Options;


use App\Panel\helpers\ModelHelper;
use App\Panel\helpers\XPermissionHelper;
use App\Panel\Singleton\XModelSingleton;

trait DeleteHelper
{

  public function canViewDelete(): bool
  {
    if (XModelSingleton::getModel($this->model)::disable()->has("delete")) return false;
    if ($this->hasOption(XOptions::DEFAULT_OPTION_DELETE)) {
      return XPermissionHelper::can("delete",$this->model);
    }
    return false;
  }

  public function buildDeleteOption()
  {
    if ($this->canViewDelete()) {
      $this->initializedOptions[] = XOption::getInstance()
        ->setLink( buildRoute(convertXModelToRoute($this->model) . "/-1"))
        ->setIcon("fa fa-trash")
        ->setEnableCheck(true)
        ->setType(XOptions::DEFAULT_OPTION_DELETE)
        ->setTitle("حذف موارد انتخاب شده")
        ->build();
    }
  }

}
