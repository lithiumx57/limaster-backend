<?php

namespace App\Infrastructure\ModelCast;

use App\Infrastructure\ProjectManagement\ProjectDatabaseGenerator;
use App\Models\ProjectManagement\Project;
use App\Models\User;

class BoardCast
{
  public static function castAll(): array
  {
    if (!auth()->check()) {
      abort(404);
    }

    $token = request()->input("token");
    $id = request()->input("id");

    $project = Project::where("uuid", $token)->first();
    if (!($project instanceof Project)) abort(404);
    if (!$project->hasAccess()) abort(404);

    $connection = ProjectDatabaseGenerator::getConnection($project->id);
    $board = $connection->table("boards")->where("id", $id)->where("project_id", $project->id)->first();

    if (!$board) {
      abort(404);
    };

    $users = $connection->table("board_user")->where("board_id", $board->id)->pluck("user_id")->toArray();
    $users[] = auth()->user()->id;
    $users = array_unique($users);

    $users = User::whereIn("id", $users)->get();
    $boxes = $connection->table("board_boxes")->where("board_id", $board->id)->orderBy("position", "ASC")->get();

    $taskRecords = $connection->table("board_box_lines")->where("board_id", $board->id)->orderBy("position", "ASC")->get();

    $columns = [];
    $columnOrders = [];
    $tasks = [];


    foreach ($taskRecords as $record) {
      $user = User::find($record->user_id);

      $tasks[$record->token] = [
        "id" => $record->token,
        "content" => $record->text,
        "user" => [
          "id" => $user->id,
          "name" => $user->name,
          "avatar" => $user->getAvatar(),
        ],
        "createdAt" => getAgoJalali($record->created_at),
        "updatedAt" => getAgoJalali($record->updated_at),
      ];
    }

    foreach ($boxes as $box) {

      $taskIds = [];

      foreach ($taskRecords as $record) {
        if ($record->board_box_id == $box->id) {
          $taskIds[] = $record->token;
        }
      }

      $columns[$box->token] = [
        "id" => $box->token,
        "title" => $box->name,
        "taskIds" => $taskIds,
      ];
      $columnOrders[] = $box->token;
    }


    return [
      "tasks" => $tasks,
      "columns" => $columns,
      "columnOrder" => $columnOrders,
    ];
  }


}