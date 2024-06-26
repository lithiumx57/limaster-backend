<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class NewPasswordController extends Controller
{

  public function store(Request $request): JsonResponse
  {

    try {
      $request->validate([
        'token' => ['required'],
        'email' => ['required', 'email'],
        'password' => ['required', 'confirmed', Rules\Password::defaults()],
      ]);
    } catch (Exception $exception) {
      return response()->json([
        "success" => false,
        "message" => $exception->getMessage()
      ]);
    }


    $status = Password::reset(
      $request->only('email', 'password', 'password_confirmation', 'token'),
      function ($user) use ($request) {
        $user->forceFill([
          'password' => Hash::make($request->password),
          'remember_token' => Str::random(60),
        ])->save();
        event(new PasswordReset($user));
      }
    );


    if ($status != Password::PASSWORD_RESET) {

      return response()->json([
        "success" => false,
        "message" => __($status)
      ]);
    }


    return response()->json([
      "success" => true,
      "message" => __($status)
    ]);
  }
}
