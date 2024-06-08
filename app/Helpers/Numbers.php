<?php

namespace App\Helpers;



class Numbers
{
  public static function getInstance(): Numbers
  {
    return new Numbers();
  }


  public function round($price): int
  {
    return ceil($price / 1000) * 1000;
  }

  public function format($number): string
  {
    return number_format($this->round($number));
  }

  public function persian($number): string
  {
    return strtr($number, array('0' => '۰', '1' => '۱', '2' => '۲', '3' => '۳', '4' => '۴', '5' => '۵', '6' => '۶', '7' => '۷', '8' => '۸', '9' => '۹'));
  }


  public function priceFormat($price): string
  {
    return $this->format($price);
  }

  function computeDiscount($mainPrice, $finalPrice): int
  {
    if ($mainPrice == 0) return 0;
    if ($finalPrice == 0) return 0;

    if ($mainPrice == $finalPrice) {
      return 0;
    }
    if ($mainPrice < $finalPrice){
      return 0;
    }


    $diff = $mainPrice - $finalPrice;
    return floor($diff/$mainPrice *100);

  }


  function roundPrice($price): int
  {
    if (!is_numeric($price)) return 0;
    $price = ceil($price / 1000);
    return (int)($price * 1000);
  }

  public function toEnglishDigit($string)
  {
    if ($string == null) $string = "";
    $result = strtr($string, array('۰' => '0', '۱' => '1', '۲' => '2', '۳' => '3', '۴' => '4', '۵' => '5', '۶' => '6', '۷' => '7', '۸' => '8', '۹' => '9'));
    return strtr($result, array('۰' => '0', '۱' => '1', '۲' => '2', '۳' => '3', '۴' => '4', '۵' => '5', '۶' => '6', '۷' => '7', '۸' => '8', '۹' => '9'));
  }

}
