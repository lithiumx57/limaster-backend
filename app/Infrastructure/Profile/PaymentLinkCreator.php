<?php

namespace App\Infrastructure\Profile;


use App\Models\Transaction;
use Exception;
use Illuminate\Support\Str;
use SoapClient;

class PaymentLinkCreator
{
  private static function getMerchantCode()
  {
    return env("ZARINPAL_MERCHANT_CODE");
  }

  public static function create()
  {
    $amount = request()->input("amount");
    $description = request()->input("description");

    validate()->validateNumber($amount, "مبلغ پرداخت", min: 10_000, max: 100_000_000);
    validate()->validateString($description, "وضیحات تراکنش", min: 0, max: 200, required: false);

    if (!$description) $description = "پرداخت در limaster.ir";

    $link = strtolower(Str::random(12));

    $result = Transaction::create([
      "amount" => $amount,
      "description" => $description,
      "status" => "pending",
      "link" => $link
    ]);

    return [
      "link" => env("FRONTEND_URL") . "/payment/" . $link,
    ];


  }

  public static function generateToken($description,$amount,$callback)
  {
    $client = new SoapClient('https://www.zarinpal.com/pg/services/WebGate/wsdl', ['encoding' => 'UTF-8']);

    $soap = $client->PaymentRequest([
      'MerchantID' => self::getMerchantCode(),
      'Amount' => $amount,
      'Description' => $description,
      'CallbackURL' => $callback,
    ]);

    $status = $soap->Status;
    $isValid = $status == 100 || $status == 101;
    if ($isValid){
      return $soap->Authority;
    }

    throw new Exception("خطا در پرداخت");

  }

  public static function start()
  {
    $token = request()->input("token");
    $transaction = Transaction::where("link", $token)->first();

    if (!($transaction instanceof Transaction)) return self::failureResponse(null);

    if ($transaction->status == "paid") {
      return self::successResponse($transaction);
    }

    if ($transaction->status == "canceled") {
      return self::failureResponse($transaction);
    }


    $client = new SoapClient('https://www.zarinpal.com/pg/services/WebGate/wsdl', ['encoding' => 'UTF-8']);

    $soap = $client->PaymentRequest([
      'MerchantID' => self::getMerchantCode(),
      'Amount' => $transaction->amount,
      'Description' => $transaction->description,
      'CallbackURL' => env("APP_URL") . "/payment/callback",
    ]);


    $status = $soap->Status;
    $isValid = $status == 100 || $status == 101;

    if ($isValid) {
      $transaction->update([
        "token" => $soap->Authority,
      ]);
      return [
        "success" => true,
        "link" => 'https://www.zarinpal.com/pg/StartPay/' . $soap->Authority,
        "status" => $transaction->status,
      ];
    } else {
      return [
        "success" => false,
        "status" => $transaction->status,
      ];
    }

  }


  private static function successResponse(Transaction $transaction)
  {
    $link = $transaction->link;
    return redirect(env("FRONTEND_URL") . "/payment/callback/" . $link);
  }

  private static function failureResponse(Transaction|null $transaction = null)
  {
    $link = $transaction ? $transaction->link : "nf";
    return redirect(env("FRONTEND_URL") . "/payment/callback/" . $link);
  }


  public static function validate($amount,$token)
  {
    $client = new SoapClient('https://www.zarinpal.com/pg/services/WebGate/wsdl', ['encoding' => 'UTF-8']);
    $token = $client->PaymentVerification([
      'MerchantID' => self::getMerchantCode(),
      'Amount' => $amount,
      'Authority' => $token,
    ]);

    $status = $token->Status;
    $refId = $token->RefID;
    return  $status == 100 || $status == 101;
  }


  public static function callback()
  {
    $token = request()->input("Authority");
    if (!$token) abort(404);

    $transaction = Transaction::where("token", $token)->first();
    if (!($transaction instanceof Transaction)) abort(404);

    if ($transaction->status == "paid") {
      return self::successResponse($transaction);
    } else if ($transaction->status == "canceled") {
      return self::failureResponse($transaction);
    }


    try {
      $client = new SoapClient('https://www.zarinpal.com/pg/services/WebGate/wsdl', ['encoding' => 'UTF-8']);
      $token = $client->PaymentVerification([
        'MerchantID' => self::getMerchantCode(),
        'Amount' => $transaction->amount,
        'Authority' => $token,
      ]);

      $status = $token->Status;
      $refId = $token->RefID;
      $isValid = $status == 100 || $status == 101;

      if ($isValid) {
        return self::successResponse($transaction);
      }
      return self::failureResponse($transaction);
    } catch (Exception $e) {
      return self::failureResponse($transaction);
    }

  }


}
