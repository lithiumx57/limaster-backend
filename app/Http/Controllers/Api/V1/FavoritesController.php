<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use Exception;
use Illuminate\Http\Request;

class FavoritesController extends Controller
{

  public function index($method = null)
  {
    try {
      return apiResponse()->success($this->$method());
    } catch (Exception $exception) {
      return apiResponse()->validationError($exception->getMessage());
    }
  }

  public function getAll()
  {
    return  Favorite::getAll();
  }

  public function switch()
  {
    return Favorite::switch();
  }


}
