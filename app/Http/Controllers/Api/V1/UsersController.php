<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
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


  public function getToken():array
  {
    $user = auth()->user();
    $token = $user->token;
    if ($token === null) {
      $token = Str::uuid();
      auth()->user()->update(["token" => $token,]);
    }
    return ["token" => $token];
  }
}
