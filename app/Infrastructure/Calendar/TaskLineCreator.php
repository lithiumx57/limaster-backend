<?php

namespace App\Infrastructure\Calendar;

use App\Models\Calendar\Task;
use Exception;
use Illuminate\Support\Carbon;

class TaskLineCreator
{
  /**
   * @throws Exception
   */
  public static function create(Task $task, Carbon $start, Carbon $end, $title, $mode):void
  {
    if (!is_string($title)) {
      throw new Exception("عنوان تسک الزامی است");
    }

    if (mb_strlen($title) > 1000) {
      throw new Exception("عنوان تسک نباید بیشتر از 1000 کاراکتر باشد");
    }


    if (mb_strlen($title) < 6) {
      throw new Exception("عنوان تسک نباید کمتر از 6 کاراکتر باشد");
    }

    $modes = [
      "once",
//      "monthly",
//      "yearly",
    ];


    if (!in_array($mode, $modes)) {
      throw new Exception("نوع انتخاب شده اشتباه است");
    }


    $task->lines()->create([
      "text" => $title,
      "start_at" => $start,
      "end_at" => $end,
      "mode" => $mode
    ]);
  }
}