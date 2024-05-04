<?php

namespace App\Infrastructure\Cart;

use App\Infrastructure\PageCast\ProductPageCast;
use App\Models\Cart;
use App\Models\CartLine;

class CartCast
{
  public static function cast(): array
  {
    $userId = auth()->user()->id;
    $cart = Cart::where("user_id", $userId)->first();
    if ($cart == null) $cart = AddToCart::getOrCreateCart();
    $line = $cart->lines()->first();

    if (!($line instanceof CartLine)) {
      return [
        "count" => 0,
      ];
    }

    return [
      "count" => 1,
//      "date" => $cart->created_at,
//      "hour" => $cart->created_at,
      "type" => $line->product->carType->name,
      "product" => ProductPageCast::cast($line->product),
      "amount"=>$line->product->price,
    ];

  }
}