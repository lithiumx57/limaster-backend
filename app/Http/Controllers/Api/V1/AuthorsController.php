<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class AuthorsController extends Controller
{
  public function index($method = null)
  {
    try {
      return apiResponse()->success($this->$method());
    } catch (Exception $exception) {
      return apiResponse()->validationError($exception->getMessage());
    }
  }


  public function get()
  {

    $data = [];
    $id = request()->input("id");
    $id = 1;
    if (!is_numeric($id)) abort(404);

    $user = User::findOrFail($id);
    if (is_array($user->data)) $data = $user->data;


    $birthday = $user->getData("profile,birthday");

    if (is_array($birthday) && isset($birthday["main"])) {
      $birthday["age"] = Carbon::parse($birthday["main"])->age;
    }

    $avatar = $user->getData("profile,avatar,600");
    $banner = $user->getData("profile,banner,1200");

    if ($banner) {
      $banner = "/files/uploads/user/" . $id . "/banner/" . $banner;
    } else {
      $banner = getDefaultAvatar();
    }

    if ($avatar) {
      $avatar = "/files/uploads/user/" . $id . "/avatar/" . $banner;
    } else {
      $avatar = getDefaultAvatar();
    }

    return [
      "id" => $id,
      "name" => $user->name,
      "avatar" => $avatar,
      "banner" => $banner,
      "description" => $user->getData("profile,description"),
      "bio" => $user->getData("profile,bio"),
      "job" => $user->getData("profile,job"),
      "birthday" => $birthday,
      "socials" => $user->getData("profile,socials"),
      "createdAt" => convertToJalali($user->created_at, "Y/m/d")
    ];


  }


}

