<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Infrastructure\Profile\PaymentLinkCreator;
use App\Models\Transaction;
use Exception;
use Illuminate\Http\Request;

class PaymentsController extends Controller
{
  public function index($method = null)
  {
    try {
      return apiResponse()->success($this->$method());
    } catch (Exception $exception) {
      return apiResponse()->validationError($exception->getMessage());
    }
  }

  public function getData()
  {
    $token = request()->input("token");
    if (!$token) {
      throw new Exception("تراکنش یافت نشد");
    }
    $transaction = Transaction::where("link", $token)->first();
    if (!($transaction instanceof Transaction)) {
      throw new Exception("تراکنش یافت نشد");
    }

    return [
      "status" => $transaction->status == "paid" ? "paid" : "notPaid",
      "canPay" => $transaction->status == "pending",
      "description" => $transaction->description,
      "link" => $transaction->link,
      "amount" => $transaction->amount,
    ];

  }

  public function pay()
  {
    return PaymentLinkCreator::start();
  }

}
