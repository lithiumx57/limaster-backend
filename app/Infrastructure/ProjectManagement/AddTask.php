<?php

namespace App\Infrastructure\ProjectManagement;

use App\Models\ProjectManagement\Project;
use Illuminate\Support\Carbon;

class AddTask
{
  public static function add()
  {
    if (!auth()->check()) return;

    $keyword = request()->input("keyword");
    $uuid = request()->input("uuid");
    $boxId = request()->input("boxId");
    $boardId = request()->input("boardId");
    $projectToken = request()->input("projectToken");

    $project = Project::where("uuid", $projectToken)->first();
    if (!$project) return;
    if (!$project->hasAccess()) return;


    $connection = ProjectDatabaseGenerator::getConnection($project->id);
    $board = $connection->table("boards")->where("id", $boardId)->where("project_id", $project->id)->first();
    if (!$board) return;

    if (!$keyword) return;
    if (!is_string($keyword)) return;
    if (strlen(trim($keyword)) < 2) return;

    $boardBox = $connection->table("board_boxes")->where("board_id", $boardId)->where("token", $boxId)->first();
    if (!$boardBox) return;

    $connection->table("board_box_lines")->insert([
      "board_id" => $board->id,
      "board_box_id" => $boardBox->id,
      "user_id" => auth()->user()->id,
      "text" => $keyword,
      "token" => $uuid,
      "created_at" => Carbon::now(),
      "updated_at" => Carbon::now()
    ]);
  }
}