<?php

namespace App\Infrastructure\Hashtag;

use App\Models\ForumQuestion;
use App\Models\Hashtag;
use App\Models\HashtagModel;

class AddHashtagToModel
{
  public static function add(ForumQuestion $forumQuestion, $tags)
  {

    foreach ($tags as $tag) {
      $hashtag = Hashtag::where("hashtag", $tag)->first();

      if (!($hashtag instanceof Hashtag)) {
        $hashtag = Hashtag::create([
          "hashtag" => $tag,
          "use_count" => 0,
          "click_count" => 0,
        ]);
      }


      $hashtag->update([
        "use_count" => $hashtag->use_count + 1
      ]);

      self::addModelTohashtag($hashtag, $forumQuestion);

    }

  }


  private static function addModelTohashtag(Hashtag $hashtag, ForumQuestion $forumQuestion): void
  {
    $hashTagModel = HashtagModel::where([
      "model" => ForumQuestion::class,
      "model_id" => $forumQuestion->id,
      "hashtag_id" => $hashtag->id
    ]);

    if (!($hashTagModel instanceof HashtagModel)) {
      HashtagModel::create([
        "model" => ForumQuestion::class,
        "model_id" => $forumQuestion->id,
        "hashtag_id" => $hashtag->id,
      ]);
    }

  }
}
