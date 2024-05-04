<?php

namespace App\Helpers;


use App\Panel\Models\Tag;
use App\Panel\Models\TagModel;

class AddHashtagToModel
{
  public static function add($model, $tags): void
  {

    foreach ($tags as $tag) {

      $hashtag = Tag::where("tag", $tag)->first();

      if (!($hashtag instanceof Tag)) $hashtag = Tag::create([
        "tag" => $tag,
        "use_count" => 0,
        "click_count" => 0,
      ]);




      $hashtag->update(["use_count" => $hashtag->use_count + 1]);
      self::addModelTohashtag($hashtag, $model);

    }

  }


  private static function addModelTohashtag(Tag $tag, $model): void
  {
    $hashTagModel = TagModel::where([
      "model" => get_class($model),
      "model_id" => $model->id,
      "tag_id" => $tag->id
    ]);

    if (!($hashTagModel instanceof TagModel)) {
      TagModel::create([
        "model" => get_class($model),
        "model_id" => $model->id,
        "tag_id" => $tag->id,
      ]);
    }

  }
}
