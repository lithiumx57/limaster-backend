<?php

namespace App\Panel\UiHandler\Elements\Attributes;

trait UploadAttributes
{

  /**
   * @param string $path
   *    * به صورت پیشفرض مسیر به صورت /files/uploads هست
   * و اگر این پارامتر را وارد کنید در انتهای اون آدرس قرار می گیره
   * @return $this
   */

  public function uploadPath(string $path)
  {
    $this->preSave->uploadPath = $path;
    return $this;
  }


  public function getSaveDirectory(): string
  {
    if ($this->preSave->uploadPath == null) {
      $path = getConfigurator()->getUploadPrefix() . "default";
    } else {
      $path = getConfigurator()->getUploadPrefix() . $this->preSave->uploadPath;
    }
    return $path;
  }


}
