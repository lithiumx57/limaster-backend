<?php

namespace App\Infrastructure\ProjectManagement;

use App\Infrastructure\ModelCast\UserCast;
use App\Models\ProjectManagement\Project;
use App\Models\User;

class ProjectCast
{
  public static function castAll(): array
  {
    $user = auth()->user();
    $projects = $user->projects()->latest()->get();
    return self::castCollection($projects);
  }

  public static function castUsers(Project $project): array
  {
    $users = $project->users;
    $records = [];

    foreach ($users as $user) {
      if ($user->user instanceof User) {
        $id = $user->user->id;
        $name = $user->user->name;
        $avatar = $user->user->getAvatar();
      } else {
        continue;
        $id = 0;
        $name = "-";
        $avatar = null;
      }
      $username = $user->username;

      $records[] = [
        "id" => $id,
        "name" => $name,
        "username" => $username,
        "avatar" => $avatar,
      ];
    }

    if ($project->user->id != auth()->id()) {
      $records[] = [
        "name" => auth()->user()->name,
        "username" => auth()->user()->email,
        "avatar" => auth()->user()->getAvatar(),
      ];
    }

    return $records;
  }

  public static function cast(Project $project): array
  {
    return [
      "id" => $project->uuid,
      "name" => $project->name,
      "image" => $project->getImage(),
      "users" => self::castUsers($project),
      "createdAt" => getAgoJalali($project->created_at),
    ];
  }

  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $project) $records[] = self::cast($project);
    return $records;
  }

  public static function fullCast(): array
  {
    $id = request()->input("id");
    $project = Project::where("uuid", $id)->first();
    if (!($project instanceof Project)) abort(404);

    return [
      "id" => $project->uuid,
      "name" => $project->name,
      "image" => $project->getImage(),
      "users" => self::castUsers($project),
      "manager" => UserCast::cast($project->user),
      "createdAt" => convertToJalali($project->created_at, "Y/m/d"),
      "boards" => BoardCast::castAll($project->id)
    ];

  }

}