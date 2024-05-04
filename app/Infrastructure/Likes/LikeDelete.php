<?php

namespace App\Infrastructure\Likes;

use App\Models\Like;
use App\Models\User;

class LikeDelete
{

  public static function delete(User $user, $model, $modelId):void
  {
    Like::where("user_id", $user->id)->where("model", $model)->where("model_id", $modelId)->delete();
    LikeCountUpdater::update($model, $modelId);

  }
}
