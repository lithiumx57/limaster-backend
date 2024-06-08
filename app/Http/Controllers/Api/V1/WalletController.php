<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Infrastructure\Wallet\WalletCallback;
use App\Infrastructure\Wallet\WalletCharge;
use App\Infrastructure\Wallet\WalletPreCallback;
use Exception;
use Illuminate\Http\Request;

class WalletController extends Controller
{

  public function index($method = null)
  {
    try {
      return apiResponse()->success($this->$method());
    } catch (Exception $exception) {
      return apiResponse()->validationError($exception->getMessage());
    }
  }



  public function charge()
  {
    return WalletCharge::charge();
  }


  public function preCallback()
  {
    return WalletPreCallback::init();
  }


  public function callback()
  {
    return WalletCallback::init();
  }

  public function repayment()
  {
    return WalletCharge::recharge();
  }

}
