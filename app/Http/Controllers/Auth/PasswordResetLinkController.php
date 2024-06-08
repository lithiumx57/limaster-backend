<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

class PasswordResetLinkController extends Controller
{

  public function store(Request $request): JsonResponse
  {

    $request->validate(['email' => ['required', 'email'],]);
    $status = Password::sendResetLink($request->only('email'));


    if ($status==Password::RESET_THROTTLED) $message = "ایمیل بازیابی قبلا برای شما ارسال شده است";
    else $message = __($status);

    if ($status != Password::RESET_LINK_SENT) return response()->json([
      "message" => $message,
      "success" => $status == Password::RESET_LINK_SENT
    ]);

    return response()->json([
      "message" => "لینک بازیابی با موفقیت به ایمیل شما ارسال گردید",
      "success" => $status == Password::RESET_LINK_SENT
    ]);

  }
}
