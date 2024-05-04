<?php

namespace App\Panel\helpers;

use App\Panel\Models\Tag;
use App\Panel\Models\TagModel;
use Illuminate\Support\Collection;

trait XTagTrait
{
  public function getTags($tagName): Collection
  {
    return xTag()->get(get_class($this), $this->id, $tagName);
  }


  public function updateModel(array|null $tags,string $tagName): void
  {
    $model = get_class($this);

    if (!is_array($tags)) $tags = [];
    $tags = array_unique($tags);
    TagModel::where("model", get_class($this))->where("model_id", $this->id)->delete();
    $hashtags = [];
    foreach ($tags as $tag) {
      $tag = str_replace("#", "", $tag);
      $hashtag = Tag::where("tag", $tag)->first();
      if (!($hashtag instanceof Tag)) {
        $hashtag = Tag::create(["tag" => $tag, "click_count" => 0, "use_count" => 1]);
      }
      $hashtags[] = $hashtag;
      TagModel::create([
        "model" => $model,
        "model_id" => $this->id,
        "tag_id" => $hashtag->id,
        "tag_name" => $tagName,
      ]);
    }
    self::updateHashtags($hashtags);
  }

  public static function updateHashtags($hashtags): void
  {
    foreach ($hashtags as $row) {
      $useCount = TagModel::where("tag_id", $row->id)->count();
      $row->update([
        "use_count" => $useCount
      ]);
    }
  }

  public function getTagCount($tagName): int
  {
    return TagModel::where("tag_name", $tagName)->where("model",get_class($this))->where("model_id",$this->id)->count();
  }








}