<?php

namespace App\Infrastructure\ProjectManagement;

use App\Models\ProjectManagement\Project;
use Exception;
use Illuminate\Database\Connection;

class ProjectPositionUpdate
{
  /**
   * @throws Exception
   */
  private static function validate($boxes): array
  {
    if (count($boxes) == 0) {
      throw new Exception();
    }

    foreach ($boxes as $box) {
      if (!is_string($box)) {
        throw new Exception();
      }
    }


    $boardId = request()->input("boardId");
    $projectToken = request()->input("projectToken");

    $project = Project::where("uuid", $projectToken)->first();
    if (!ProjectAccessHelper::hasAccess($project)) {
      throw new Exception();
    }

    $connection = ProjectDatabaseGenerator::getConnection($project->id);

    $board = $connection->table("boards")->where("id", $boardId)->where("project_id", $project->id)->first();
    if (!ProjectAccessHelper::hasAccessToBoard($board, $connection)) throw new Exception();

    return [
      "connection" => $connection,
      "board" => $board,
    ];

  }

  public static function init(): void
  {
    $tasks = request()->input("tasks");
    $boxes = request()->input("boxes");


    try {
      $result = self::validate($boxes);
      self::updateBoxes($boxes, $result["connection"], $result["board"]);
      self::updateTasks($tasks, $result["connection"], $result["board"]);
    } catch (Exception) {

    }

  }


  private static function updateTasks($tasks, $connection, $board): void
  {
    $boardId = $board->id;
    foreach ($tasks as $key => $task) {
      $box = $connection
        ->table("board_boxes")
        ->where("board_id", $boardId)
        ->where("token", $task["boxToken"])
        ->first();
      if (!$box) continue;

      $connection->table("board_box_lines")
        ->where("board_id", $boardId)
        ->where("token", $task["uuId"])
        ->update([
          "position" => $key,
          "board_box_id" => $box->id
        ]);
    }
  }

  private static function updateBoxes($boxes, Connection $connection, $board): void
  {
    $boardId = $board->id;
    foreach ($boxes as $key => $box) {
      $connection
        ->table("board_boxes")
        ->where("board_id", $boardId)
        ->where("token", $box)
        ->update(["position" => $key]);
    }
  }


}