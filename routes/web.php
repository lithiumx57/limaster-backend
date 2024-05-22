<?php

use App\Http\Controllers\Api\V1\ProfileController;
use App\Models\ProjectManagement\Project;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;

Route::get('/', function () {
//  return \App\Infrastructure\Forum\QuestionCast::fullPageCast(3, "عنوان-تستی");


  exit;


  \App\Infrastructure\ProjectManagement\ProjectDatabaseGenerator::getConnection(Project::first()->id);


//  dd($results);

  dd(\App\Infrastructure\ModelCast\UserCast::castPage());

  return ['Laravel' => app()->version()];
});

Route::get("ck-loader", function () {
  return view("ckeditor");
});

require __DIR__ . '/auth.php';

Route::get("/calendar", [\App\Http\Controllers\Api\V1\CalendarController::class, "index"]);
Route::any("/calendar/get-events", [\App\Http\Controllers\Api\V1\CalendarController::class, "getEvents"]);

Route::get("/payment/callback",[ProfileController::class,"linkPaymentCallback"]);


//Route::get("adasda", function () {
//  $quotations = \App\Models\Quotation::latest()->get();
//  foreach ($quotations as $quotation) {
//    if (!($quotation instanceof \App\Models\Quotation)) continue;
//
//    $result = RegexExtract::extractHastags($quotation->description);
//    if (count($result) > 0) {
//      $description = RegexExtract::deleteHastags($quotation->description);
//      $quotation->updateModelTags($result, null);
//      $quotation->update([
//        "description" => $description,
//      ]);
//    }
//  }
//});