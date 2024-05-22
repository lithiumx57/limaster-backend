<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Infrastructure\Profile\PaymentLinkCreator;
use App\Infrastructure\Profile\ProfileImageUploader;
use App\Infrastructure\Profile\UpdatePassword;
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


  public function updateBanner()
  {
    ProfileImageUploader::uploadBanner();
  }


  public function updateAvatar()
  {
    ProfileImageUploader::uploadAvatar();
  }



  public function updateDashboard()
  {
    UpdatePersonalInfo::updateInfo();
  }

  public function updatePassword()
  {
    return UpdatePassword::update();
  }

  public function generateAmountLink()
  {
    return PaymentLinkCreator::create();
  }


  public function linkPaymentCallback()
  {
    return PaymentLinkCreator::callback();
  }




}
