<?php

use App\Helpers\DashboardConfigurator;
use App\Http\Controllers\Api\V1\CalendarController;
use App\Http\Controllers\Api\V1\WalletController;
use App\Panel\XDashboard;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;


XDashboard::initialize(new DashboardConfigurator());


Route::get('/', function () {
  \App\Infrastructure\Sitemap\SitemapGenerator::generateIndex();
//  return ['Laravel' => app()->version()];
});

Route::get("ck-loader", function () {
  return view("ckeditor");
});

Route::get("gs", function () {
  \App\Infrastructure\Sitemap\SitemapGenerator::generateIndex();
});

Route::get("temp", function () {
  $actionUrl = "https://test.com";
  return view("vendor.notifications.email", compact("actionUrl"));
});

Route::any("/v1/oauth2/google", function () {
  $credential=request()->input("credential");
  $user = Socialite::driver('google')->stateless()->user();
  dd($user);
});


require __DIR__ . '/auth.php';

Route::get("/calendar", [CalendarController::class, "index"]);
Route::any("/calendar/get-events", [CalendarController::class, "getEvents"]);

Route::get("/payment/wallet-callback", [WalletController::class, "preCallback"]);

