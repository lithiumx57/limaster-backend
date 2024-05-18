<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Infrastructure\Profile\ProfileImageUploader;
use App\Infrastructure\Profile\UpdatePersonalInfo;
use Exception;
use Illuminate\Http\Request;

class ProfileController extends Controller
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
  public function updateBanner()
  {
    ProfileImageUploader::uploadBanner();
  }


  /**
   * @throws Exception
   */
  public function updateAvatar()
  {
    ProfileImageUploader::uploadAvatar();
  }


  /**
   * @throws Exception
   */
  public function updateDashboard()
  {
    UpdatePersonalInfo::updateInfo();
  }



}
