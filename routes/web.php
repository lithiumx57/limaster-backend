<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return \App\Infrastructure\Forum\QuestionCast::fullPageCast(3,"عنوان-تستی");
  return ['Laravel' => app()->version()];
});

Route::get("ck-loader", function () {
  return view("ckeditor");
});

require __DIR__ . '/auth.php';
