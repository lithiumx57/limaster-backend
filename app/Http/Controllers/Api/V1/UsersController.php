<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Infrastructure\ModelCast\UserCast;
use Exception;
use Illuminate\Support\Str;

class UsersController extends Controller
{

  public function index($method)
  {
    try {
      return apiResponse()->success($this->$method());
    } catch (Exception $exception) {
      return apiResponse()->validationError($exception->getMessage());
    }
  }


  /**
   * @throws Exception
   */
  public function getToken(): array
  {
    if (!auth()->check()) throw new Exception("کاربر یافت نشد");

    $user = auth()->user();
    $token = $user->token;
    if ($token === null) {
      $token = Str::uuid();
      auth()->user()->update(["token" => $token,]);
    }
    return ["token" => $token];
  }

  public function show()
  {
    return UserCast::castPage();
  }

}
