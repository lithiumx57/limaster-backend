<?php

namespace App\Infrastructure\Likes;

use App\Models\Like;
use App\Models\User;
use Exception;

class LikeHandler
{
  /**
   * @throws Exception
   */
  public static function like($model, $modelId): LikeHandlerResponse
  {
    $user = getUser();
    if (!($user instanceof User)) {
      throw  new Exception("برای پسند کردن ابتدا وارد حساب کاربری خود شوید");
    }

    $response = new LikeHandlerResponse();

    $like = Like::where("user_id", $user->id)->where("model", $model)->where("model_id", $modelId)->first();
    if ($like instanceof Like) {
      LikeDelete::delete($user, $model, $modelId);
      $response->setType("remove");
    } else {
      LikeCreator::create($user, $model, $modelId);
      $response->setType("add");
    }

    $likesCount = $model::find($modelId)->getLikesCount();
    $response->setCount($likesCount);
    return $response;

  }


}
