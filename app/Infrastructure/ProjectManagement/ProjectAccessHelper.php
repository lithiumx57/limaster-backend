<?php

namespace App\Infrastructure\ProjectManagement;

use App\Models\ProjectManagement\Project;
use Illuminate\Database\Connection;

class ProjectAccessHelper
{
  public static function hasAccess(Project|null $project): bool
  {
    if (!auth()->check()) return false;
    if (!$project) return false;
    return $project->hasAccess();
  }

  public static function hasAccessToBoard($board, Connection $connection): bool
  {
    if (!$board) return false;
    return !!$connection->table("board_user")->where("user_id", auth()->user()->id)->where("board_id", $board->id)->count();
  }


}