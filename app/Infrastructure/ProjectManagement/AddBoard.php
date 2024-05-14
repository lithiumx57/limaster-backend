<?php

namespace App\Infrastructure\ProjectManagement;

use App\Models\ProjectManagement\Project;

class AddBoard
{
  public static function add()
  {
    $id = request()->input("id");
    $name = request()->input("name");
    $users = request()->input("users");

    $project = Project::where("uuid", $id)->first();
    if (!($project instanceof Project)) abort(404);

    if (!$project->hasAccess()) abort(404);




  }
}