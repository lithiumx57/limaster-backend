<?php

namespace App\Infrastructure\ModelCast;

use App\Models\User;
use Exception;
use Illuminate\Support\Carbon;

class UserCast
{
  public static function cast(User|null $user): array
  {
    if (!($user instanceof User)) {
      return [];
    }

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
      if (!$user) continue;
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


  public static function castPage(): array
  {
    $user = request()->input("user");
    $user = User::first();

    $age = null;

    try {
      $birthday = $user->getData("profile,birthday");
      $main = $birthday["main"];
      $age = number_format(Carbon::parse($main)->diffInYears(Carbon::now()),0);
      if ($age <= 0) $age = null;
    } catch (Exception) {

    }


    return [
      "user" => [
        "id" => $user->id,
        "name" => $user->name,
        "age" => $age,
        "lastSeen" => getAgoJalali($user->last_seen),
        "slug" => $user->slug,
        "avatar" => $user->getData("profile,avatar"),
        "banner" => $user->getData("profile,banner"),
        "birthday" => $user->getData("profile,birthday"),
        "nickname" => $user->getData("profile,nickname"),
        "bio" => $user->getData("profile,bio"),
        "job" => $user->getData("profile,job"),
        "socials" => $user->getData("profile,socials"),
        "description" => $user->getData("profile,description"),
      ],
      "head" => [
        "title" => "عنوان صفحه",
        "description" => "عنوان صفحه"
      ]
    ];
  }

}