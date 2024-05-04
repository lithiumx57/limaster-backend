<?php


namespace App\Panel\UiHandler\Options;


use App\Panel\helpers\ModelHelper;
use App\Panel\helpers\XPermissionHelper;
use App\Panel\Singleton\XModelSingleton;

trait EditHelper
{

  public function canViewEdit(): bool
  {
    if (XModelSingleton::getModel($this->model)::disable()->has("edit")) return false;
    if ($this->hasOption(XOptions::DEFAULT_OPTION_EDIT)) {
      return XPermissionHelper::can("edit", $this->model);
    }
    return false;
  }

  public function buildEditOption()
  {
    if ($this->canViewEdit()) {
      $this->initializedOptions[] = XOption::getInstance()
        ->setLink(buildRoute( convertXModelToRoute($this->model)) . "/id/edit")
        ->setIcon("fa fa-edit")
        ->setType(XOptions::DEFAULT_OPTION_EDIT)
        ->setTitle("ویرایش")
        ->setEnableCheck(true)
        ->build();
    }
  }

}
