<?php


namespace App\Panel\UiHandler\Options;


use App\Panel\helpers\ModelHelper;
use App\Panel\helpers\XPermissionHelper;
use App\Panel\Singleton\XModelSingleton;

trait CreateHelper
{
  public function canViewCreate(): bool
  {
    if (XModelSingleton::getModel($this->model)::disable()->has("create")) return false;
    if ($this->hasOption(XOptions::DEFAULT_OPTION_CREATE)) {
      return XPermissionHelper::can("post", $this->model);
    }
    return false;
  }

  public function buildCreateOption():void
  {
    if ($this->canViewCreate()) {
      $this->initializedOptions[] = XOption::getInstance()
          ->setLink(buildRoute(convertXModelToRoute($this->model)) . "/create" . $this->getConditions())
        ->setIcon("fa fa-pencil")
        ->setType(XOptions::DEFAULT_OPTION_CREATE)
        ->setTitle("ثبت یک مورد جدید")
        ->build();
    }
  }


}
