<?php

namespace App\Infrastructure\ProjectManagement;

use App\Models\ProjectManagement\Project;
use App\Models\ProjectManagement\ProjectUser;
use App\Models\User;
use App\Panel\helpers\Image\XImageUploader;
use App\Panel\helpers\XStringHelper;
use Error;
use Exception;
use Illuminate\Support\Str;
use Throwable;

class ProjectCreate
{
  /**
   * @throws Exception
   */
  public static function create()
  {
    if (!auth()->check()) {
      throw new Exception("برای ثبت پروژه ابتدا وارد حساب کاربری خود شوید");
    }

    $name = request()->input("name");
    $image = request()->input("image");


    validate()->validateString($name, "عنوان پروژه", min: 6, max: 50);
    $users = self::getUsers();


    try {
      $image = XImageUploader::getInstance()->uploadFromBase64("project-management", $image, [600])[600];
    } catch (Exception|Throwable|Error $e) {
      $image = null;
    }

    $project = Project::create([
      "name" => $name,
      "image" => $image,
      "user_id" => auth()->id(),
      "uuid" => Str::uuid()
    ]);

    foreach ($users as $user) {
      if ($user["username"] == auth()->user()->email) {
        continue;
      }

      ProjectUser::create([
        "project_id" => $project->id,
        "user_id" => $user["user_id"],
        "username" => $user["username"],
      ]);
    }

  }


  /**
   * @throws Exception
   */
  private static function getUsers(): array
  {
    $userRecords = [];

    $users = request()->input("users");
    if (!is_array($users)) $users = [];

    foreach ($users as $user) {
      $username = @$user["text"];
      if (!is_string($username)) continue;
      if (strlen($username) < 8) throw new Exception("ایمیل وارد شده اشتباه است" . " (  " . $username . " ) ");
      if (strlen($username) > 50) throw new Exception("ایمیل وارد شده طولانی است" . " (  " . $username . " ) ");
      if (!(XStringHelper::isEmail($username))) throw new Exception("نام کاربری باید به صورت ایمیل وارد شود " . " (  " . $username . " ) ");
      $userRecords[] = $username;
    }

    $result = array_unique($userRecords);

    $records = [];

    foreach ($result as $username) {
      $user = User::where("email", $username)->first();
      $records[] = [
        "user_id" => $user instanceof User ? $user->id : 0,
        "username" => $username,
      ];
    }
    return $records;
  }
}









