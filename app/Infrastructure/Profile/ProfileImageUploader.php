<?php

namespace App\Infrastructure\Profile;

use App\Panel\helpers\Image\XImageUploader;
use App\Panel\helpers\XFileHelper;
use Exception;

class ProfileImageUploader
{
  /**
   * @throws Exception
   */
  public static function uploadBanner(): void
  {
    $user = auth()->user();
    if (!$user) return;
    $banner = request()->input("banner");
    $oldBanner = $user->getData("profile,banner");
    $banner = XImageUploader::getInstance()->uploadFromBase64("user/" . $user->id . "/banner", $banner, [700, 1200]);
    if (is_array($oldBanner)) XFileHelper::deleteFile($oldBanner, "files/uploads/user/" . $user->id . "/banner");
    $user->attachData("profile,banner", $banner);
  }

  /**
   * @throws Exception
   */
  public static function uploadAvatar(): void
  {
    $user = auth()->user();
    if (!$user) return;
    $banner = request()->input("avatar");
    $oldBanner = $user->getData("profile,avatar");
    $banner = XImageUploader::getInstance()->uploadFromBase64("user/" . $user->id . "/avatar", $banner, [200, 600]);
    if (is_array($oldBanner)) XFileHelper::deleteFile($oldBanner, "files/uploads/user/" . $user->id . "/avatar");
    $user->attachData("profile,avatar", $banner);
  }
}