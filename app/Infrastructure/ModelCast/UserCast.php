<?php

namespace App\Infrastructure\ModelCast;

use App\Models\User;

class UserCast
{
  public static function cast(User $user):array
  {
    return[
      "name" => $user->name,
      "bio"=>"",
      "avatar"=>"",
    ];
  }
}