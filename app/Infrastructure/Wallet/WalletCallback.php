<?php

namespace App\Infrastructure\Wallet;

use App\Models\WalletLog;
use Exception;

class WalletCallback
{

  public static function init(): array
  {
    $token = request()->input("token");
    if (!$token) throw new Exception("تراکنش یافت نشد");

    $walletLog = WalletLog::where("token", $token)->first();

    if (!($walletLog instanceof WalletLog)) throw new Exception("تراکنش یافت نشد");
    if ($walletLog->user_id != auth()->user()->id) throw new Exception("تراکنش یافت نشد");


    return [
      "status" => $walletLog->isSuccess() ? "success" : "notSuccess",
      "message" => $walletLog->isSuccess() ? "پرداخت  موفقیت" : "خطا در پرداخت ",
      "description" => "شارژ کیف پول",
      "amount" => $walletLog->amount,
    ];

  }
}
