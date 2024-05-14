<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAuth
{

  public function handle(Request $request, Closure $next): Response
  {
    if (!auth()->check()) {
      return response()->json([
        "success" => false,
        "message" => "Unauthorized",
        "status" => 403,
        "payload" => null
      ]);
    }
    return $next($request);
  }
}
