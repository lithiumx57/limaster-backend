<?php

use App\Http\Controllers\Api\V1\CalendarController;
use App\Http\Controllers\Api\V1\ProfileController;
use App\Models\ProjectManagement\Project;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;

//dd(extension_loaded('pdo_pgsql'));

Route::get('/', function () {
//  return \App\Infrastructure\Forum\QuestionCast::fullPageCast(3, "عنوان-تستی");

  dd("ads");
  return [
    "name"=>"milad"
  ];

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

Route::get("/calendar", [CalendarController::class, "index"]);
Route::any("/calendar/get-events", [CalendarController::class, "getEvents"]);

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
