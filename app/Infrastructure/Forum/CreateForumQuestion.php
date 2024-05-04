<?php

namespace App\Infrastructure\Forum;

use App\Helpers\AddHashtagToModel;
use App\Models\Forum;
use App\Panel\Models\Tag;
use Exception;

class CreateForumQuestion
{
  /**
   * @throws Exception
   */
  public static function create(): void
  {
    $title = request()->input("title");
    $description = request()->input("description");
    $tags = request()->input("tags");
    if (!is_array($tags)) $tags = [];

    validate()->validateString($title, "عنوان", min: 6, max: 100);
    validate()->validateString($description, "توضیحات", min: 6, max: 8000);

    $textTags = Tag::extractFromText($description);
    $tags = self::validate($tags);
    $tags = array_merge($tags, $textTags);
    $tags = array_unique($tags);

    $forumQuestion = Forum::create([
      "title" => $title,
      "description" => $description,
      "views_count" => 0,
      "user_id" => user()->getId(),
      "approved" => true,
      "slug" => createSlug(Forum::class, $title),
    ]);
    AddHashtagToModel::add($forumQuestion, $tags);
  }


  /**
   * @throws Exception
   */
  private static function validate($tags): array
  {
    if (count($tags) > 10) throw new Exception("تعداد تگ ها بیشتر از حد مجاز است");
    $tagsRecords = [];
    foreach ($tags as $row) {
      $tag = @$row["text"];
      if ($tag == null) continue;
      if (mb_strlen($tag) == 0) continue;
      $tag = trim($tag);

      if (mb_strlen($tag) < 3) throw new Exception("تگ کوتاه است");
      if (mb_strlen($tag) > 40) throw new Exception("تگ طولانی است");

      $tag = str_replace(" ", "_", $tag);
      $tag = str_replace("-", "_", $tag);
      $tagsRecords[] = $tag;
    }

    return $tagsRecords;

  }

}