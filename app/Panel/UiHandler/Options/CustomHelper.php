<?php


namespace App\Panel\UiHandler\Options;


use App\Panel\helpers\XPermissionHelper;

trait CustomHelper
{
  public function canViewCustom(): bool
  {
    if ($this->hasOption(XOptions::DEFAULT_OPTION_CREATE)) {
      return XPermissionHelper::can("post", $this->model);
    }
    return false;
  }

  public function buildCustomOption()
  {
    if ($this->canViewCustom()) {
      $options = $this->options;

      foreach ($options as $option) {
        if ($option->type == XOptions::CUSTOM) {
          if ($option->isDebugModel && !getConfigurator()->isDebugMode()) {
            continue;
          }
          $this->initializedOptions[] = $option;
        }
      }

      //      $this->initializedOptions[] = XOption::getInstance()
      //        ->setLink("/" . getAdminPrefix() . "/" . convertXModelToRoute($this->model) . "/create")
      //        ->setIcon("fa fa-pencil")
      //        ->setType(XOptions::DEFAULT_OPTION_CREATE)
      //        ->setTitle("ثبت یک مورد جدید")
      //        ->build();
    }
  }
}
