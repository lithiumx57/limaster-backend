<?php

namespace App\Infrastructure\ModelCast;

use App\Models\User;

class UserCast
{
  public static function cast(User $user): array
  {
    return [
      "name" => $user->name,
      "bio" => "",
      "avatar" => $user->getAvatar(),
    ];
  }

  public static function castCollection($users): array
  {
    $records = [];
    foreach ($users as $user) {
      $records[] = [
        "id" => $user->id,
        "name" => $user->name,
        "bio" => "asd",
        "avatar" => $user->getAvatar(),
        "date" => getAgoJalali($user->created_at),
      ];
    }
    return $records;
  }
}