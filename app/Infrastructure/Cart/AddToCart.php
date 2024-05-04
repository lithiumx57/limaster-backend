<?php

namespace App\Infrastructure\Cart;

use App\Models\Cart;
use App\Models\CartLine;
use App\Models\Product;
use Exception;

class AddToCart
{

  /**
   * @throws Exception
   */
  public static function handle()
  {
    $productId = request()->input("productId");
    $product = Product::find($productId);
    if (!($product instanceof Product)) throw new Exception("محصول یافت نشد");
    $cart = self::getOrCreateCart();


    if (!self::isInCart($productId,$cart->id)) {
      $cart->lines()->create([
        "product_id" => $productId,
      ]);
    }
  }


  public static function getOrCreateCart()
  {
    $cart = Cart::where(["user_id" => auth()->user()->id,])->first();
    if (!($cart instanceof Cart)) $cart = Cart::create(["user_id" => auth()->user()->id,]);
    return $cart;
  }


  public static function isInCart($productId,$cartId): bool
  {
    return CartLine::where("product_id", $productId)
      ->where("cart_id", $cartId)
      ->exists();
  }


}