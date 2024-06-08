<?php

namespace App\Infrastructure\Profile;

class WalletPage
{
  public static function cast()
  {
    $user = auth()->user();
    $wallet = $user->wallet;

    return [
      "wallet" => $wallet,
    ];
  }
}
