<?php

namespace App\Infrastructure\Likes;

use App\Models\Like;
use App\Models\User;

class LikeCreator
{

  public static function create(User $user, $model, $modelId):void
  {
    Like::create([
      "model" => $model,
      "user_id" => $user->id,
      "model_id" => $modelId,
    ]);

    LikeCountUpdater::update($model,$modelId);

  }

}
