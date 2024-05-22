<?php

namespace App\Infrastructure\Profile;

use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UpdatePassword
{

  /**
   * @throws Exception
   */
  public static function update(): array
  {
    $oldPassword = request()->input("oldPassword");
    $newPassword = request()->input("newPassword");

    if (!Hash::check($oldPassword, Auth::user()->password)) {
      throw new Exception("کلمه عبور فعلی نادرست است");
    }


    validate()->validateString($oldPassword, "کلمه عبور فعلی", min: 8, max: 50);
    validate()->validateString($newPassword, "کلمه عبور جدید", min: 8, max: 50);

    auth()->user()->update(["password" => bcrypt($newPassword)]);

    return [
      "message" => "رمز عبور با موفقیت به روز رسانی شد"
    ];
  }
}