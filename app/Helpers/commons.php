<?php


use App\Helper\Numbers;
use App\Infrastructure\ApiResponse\Facade\ApiResponseHelper;
use App\Infrastructure\Validation\Validation;
use Illuminate\Support\Facades\DB;
use Kavenegar\KavenegarApi;

function number(): Numbers
{
  return Numbers::getInstance();
}




function apiResponse(): ApiResponseHelper
{
  return ApiResponseHelper::getInstance();
}


function sendTextMessage($message, $to)
{
  if (!is_array($to)) $to = [$to];

  try {
    $api = new KavenegarApi("412F682F70565355354876723755556C646850724E413D3D");
    $sender = "10008008880008";
    return $api->Send($sender, $to, $message);
  } catch (Exception $exception) {
    return false;
  }

}


function convertToEnglishDigit($string): string
{
  return strtr($string, array('۰' => '0', '۱' => '1', '۲' => '2', '۳' => '3', '۴' => '4', '۵' => '5', '۶' => '6', '۷' => '7', '۸' => '8', '۹' => '9'));
}

function validate(): Validation
{
  return Validation::getInstance();
}


function getDefaultAvatar():string
{
  return asset("app/avatar.png");
}

function getDefaultBanner():string
{
  return asset("app/avatar.png");
}


function escapeHtml($data): string
{
  if ($data == null) return "";
  return preg_replace("/<[^>]*>/", "", $data);
}


function compileDbRaw($expression,$connection): string
{
  return $expression->getValue(DB::connection($connection)->getQueryGrammar());
}
