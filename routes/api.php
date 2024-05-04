<?php

use App\Http\Controllers\Api\V1\BlogController;
use App\Http\Controllers\Api\V1\CommentsController;
use App\Http\Controllers\Api\V1\ForumController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::group(["prefix" => "v1"], function () {
  Route::any("/forum/{method}",[ForumController::class,"index"]);
  Route::any("/blog/{method}",[BlogController::class,"index"]);
  Route::any("/comment/{method}",[CommentsController::class,"index"]);
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
  return $request->user();
});
