<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
//  return \App\Infrastructure\Forum\QuestionCast::fullPageCast(3, "عنوان-تستی");

  dd(\App\Infrastructure\ModelCast\UserCast::castPage());

  return ['Laravel' => app()->version()];
});

Route::get("ck-loader", function () {
  return view("ckeditor");
});

require __DIR__ . '/auth.php';

Route::get("/calendar", [\App\Http\Controllers\Api\V1\CalendarController::class, "index"]);
Route::any("/calendar/get-events", [\App\Http\Controllers\Api\V1\CalendarController::class, "getEvents"]);


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