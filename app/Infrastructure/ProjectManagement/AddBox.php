<?php

namespace App\Infrastructure\ProjectManagement;

use App\Models\ProjectManagement\Project;

class AddBox
{
  public static function add($boardId = null, $uuId = null, $projectToken = null, $keyword = null): void
  {
    if (!auth()->check()) return;

    $boardId = $boardId ?? request()->input("id");
    $uuid = $uuId ?? request()->input("uuId");
    $projectToken = $projectToken ?? request()->input("token");
    $keyword = $keyword ?? request()->input("keyword");

    if (!$keyword) return;
    if (!is_string($keyword)) return;
    if (strlen(trim($keyword)) < 2) return;

    $project = Project::where("uuid", $projectToken)->first();
    if (!ProjectAccessHelper::hasAccess($project)) return;

    $connection = ProjectDatabaseGenerator::getConnection($project->id);
    $board = $connection->table("boards")->where("id", $boardId)->where("project_id", $project->id)->first();
    if (!ProjectAccessHelper::hasAccessToBoard($board,$connection)) return;


    $connection->table("board_boxes")->insert([
      "board_id" => $boardId,
      "name" => $keyword,
      "token" => $uuid,
    ]);


  }
}