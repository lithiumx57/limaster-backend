<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return \App\Infrastructure\Forum\QuestionCast::fullPageCast(3, "عنوان-تستی");
  return ['Laravel' => app()->version()];
});

Route::get("ck-loader", function () {
  return view("ckeditor");
});

require __DIR__ . '/auth.php';

Route::get("/calendar", [\App\Http\Controllers\Api\V1\CalendarController::class,"index"]);
Route::any("/calendar/get-events", [\App\Http\Controllers\Api\V1\CalendarController::class,"getEvents"]);