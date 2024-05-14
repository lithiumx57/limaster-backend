<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Infrastructure\Calendar\TaskGetter;
use App\Models\Calendar\TaskLine;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
  public function index()
  {
    $token = request()->input("token");
    if (!$token) {
      echo "دسترسی غیر مجاز است";
      exit;
    }

    $user = User::where("token", $token)->first();
    if (!$user) {
      echo "دسترسی غیر مجاز است";
      exit;
    }

    return view("full-calendar", compact("user"));
  }

  public function getEvents()
  {
    $token = request()->input("token");
    if (!$token) abort(404);

    $user = User::where("token", $token)->firstOrFail();
    $task = TaskGetter::getOrCreate($user);
    $tasks = \App\Models\Calendar\TaskLine::where("task_id", $task->id)->get();


    $records = [];

    foreach ($tasks as $row) {
      $text = str_replace("\n", "", $row->text);
      $text = str_replace("\t", "", $text);
      $text = str_replace("\r", "", $text);

//      if ($row->mode == TaskLine::MODE_MONTHLY) {
//        $start = Carbon::parse($row->start_at)->addMonths();
//        $records[] = ["title" => $text, "start" => $start, "end" => $start];
//
//        $start = Carbon::parse($row->start_at)->addMonths(2);
//        $records[] = ["title" => $text, "start" => $start, "end" => $start];
//
//        $start = Carbon::parse($row->start_at)->addMonths(3);
//        $records[] = ["title" => $text, "start" => $start, "end" => $start];
//
//        $start = Carbon::parse($row->start_at)->addMonths(4);
//        $records[] = ["title" => $text, "start" => $start, "end" => $start];
//
//
//      }

      $records[] = [
        "title" => $text,
        "start" => $row->start_at,
        "end" => $row->end_at,
      ];
    }

    return $records;


  }
}
