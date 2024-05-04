<?php

namespace App\Infrastructure\Likes;

use App\Models\User;

class LikeCountUpdater
{

  public static function update($model, $modelId):void
  {
    $model = $model::find($modelId);
    $model->updateLikesCount();
  }

}
