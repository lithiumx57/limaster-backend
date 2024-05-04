<?php

namespace App\Infrastructure\Forum;

use App\Models\Forum;
use App\Models\ForumLine;
use Exception;

class CreateAnswer
{

  /**
   * @throws Exception
   */
  public static function init()
  {
    $description = request()->input("description");
    $id = request()->input("id");
    $parent = request()->input("parent");


    if ($parent == null || $parent == $id) $parent = 0;
    $forum = Forum::find($id);
    $parentLine = $forum->lines()->where("id", $parent)->first();

    if (!$parentLine) {
      $parent = 0;
    } else {
      $parent = $parentLine->id;
    }

    if (!($forum instanceof Forum) || !$forum->approved) throw new Exception("سوال یافت نشد");
    validate()->validateString($description, "توضیحات", min: 6, max: 8000);
    return ForumLine::create([
      "forum_id" => $forum->id,
      "description" => $description,
      "likes_count" => 0,
      "dislikes_count" => 0,
      "user_id" => user()->getId(),
      "parent" => $parent,
    ]);
  }
}