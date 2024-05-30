<?php

use App\Http\Controllers\Api\V1\AboutUsController;
use App\Http\Controllers\Api\V1\AiController;
use App\Http\Controllers\Api\V1\AuthorsController;
use App\Http\Controllers\Api\V1\BlogController;
use App\Http\Controllers\Api\V1\CommentsController;
use App\Http\Controllers\Api\V1\Developers\IpInfoController;
use App\Http\Controllers\Api\V1\FavoritesController;
use App\Http\Controllers\Api\V1\ForumController;
use App\Http\Controllers\Api\V1\PaymentsController;
use App\Http\Controllers\Api\V1\ProfileController;
use App\Http\Controllers\Api\V1\ProjectsController;
use App\Http\Controllers\Api\V1\QuotationsController;
use App\Http\Controllers\Api\V1\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(["prefix" => "v1"], function () {
  Route::any("/forum/{method}", [ForumController::class, "index"]);
  Route::any("/quotations/{method}", [QuotationsController::class, "index"]);
  Route::any("/blog/{method}", [BlogController::class, "index"]);
  Route::any("/profile/{method}", [ProfileController::class, "index"])->middleware("check-auth");
  Route::any("/user/{method}", [UsersController::class, "index"]);
  Route::any("/comment/{method}", [CommentsController::class, "index"]);
  Route::any("/author/{method}", [AuthorsController::class, "index"]);
  Route::any("/payment/{method}", [PaymentsController::class, "index"]);
  Route::any("/about/{method}", [AboutUsController::class, "index"]);
  Route::any("/favorites/{method}", [FavoritesController::class, "index"]);
  Route::any("/project/{type}", [ProjectsController::class, 'index'])->middleware("check-auth");
  Route::any("/ai/{type}", [AiController::class, 'index'])->middleware("check-auth");
  Route::any("/ip-info", [IpInfoController::class, 'index']);
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
  return $request->user();
});
