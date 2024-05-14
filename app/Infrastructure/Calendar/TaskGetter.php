<?php

namespace App\Infrastructure\Calendar;

use App\Models\Calendar\Task;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TaskGetter
{
  public static function getOrCreate(User $user,$type = "personal"): Task
  {

    $task = Task::where("user_id", $user->id)->first();
    if (!$task) $task = Task::create([
      "user_id" => Auth::id(),
      "type" => $type
    ]);
    return $task;
  }

}