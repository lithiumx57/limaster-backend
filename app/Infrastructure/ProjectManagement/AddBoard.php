<?php

namespace App\Infrastructure\ProjectManagement;

use App\Models\ProjectManagement\Project;
use Exception;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class AddBoard
{
  /**
   * @throws Exception
   */
  public static function add(): void
  {
    if (!auth()->check()) return;

    $id = request()->input("id");
    $name = request()->input("name");
    $users = request()->input("users");

    $userIds = [auth()->user()->id];
    foreach ($users as $user) $userIds[] = $user["id"];

    validate()->validateString($name, "نام", min: 4, max: 100);
    $project = Project::where("uuid", $id)->first();
    if (!($project instanceof Project)) abort(404);
    if (!$project->hasAccess()) abort(404);
    $connection = ProjectDatabaseGenerator::getConnection($project->id);

    $id = $connection->table("boards")->insertGetId([
      "project_id" => $project->id,
      "user_id" => auth()->user()->id,
      "name" => $name,
      "created_at" => Carbon::now(),
      "updated_at" => Carbon::now(),
    ]);
    foreach ($userIds as $user) $connection->table("board_user")->insert(["board_id" => $id, "user_id" => $user]);
    self::addDefaultBoxes($id,$project->uuid);
  }


  public static function addDefaultBoxes($boardId, $projectToken): void
  {
    AddBox::add($boardId, Str::random(20), $projectToken, "انجام نشده");
    AddBox::add($boardId, Str::random(20), $projectToken, "در حال انجام");
    AddBox::add($boardId, Str::random(20), $projectToken, "انجام شده");
  }

}