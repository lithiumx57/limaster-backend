<?php

namespace App\Infrastructure\Comments;

use App\Models\Comment;
use App\Models\User;
use Exception;

class CommentsCreator
{

  /**
   * @throws Exception
   */
  public static function create($model, $modelId, $text, $parent = 0, User|null $user = null): Comment
  {
    if ($parent == null) {
      $parent = 0;
    }

    self::validate($model, $modelId, $text, $user);

    $model = Comment::MODELS[$model];
    $result = $model::find($modelId);

    if (!($result instanceof CommentableInterface)) {
      throw new Exception("خطایی رخ داده است1");
    }

    if (!($result instanceof $model)) {
      throw new Exception("خطایی رخ داده است2");
    }

    if (!$result->canPostComment()) {
      throw new Exception("خطایی رخ داده است3");
    }

    $comment = Comment::create([
      "name" => $user->name,
      "model" => $model,
      "approved" => $result->defaultApproved(),
      "parent" => $parent,
      "body" => $text,
      "model_id" => $modelId,
      "user_id" => $user->id,
      "contact" => $user->username,
    ]);

    $result->updateCommentsCount();

    return $comment;


  }


  /**
   * @throws Exception
   */
  private static function validate($model, $modelId, $text, $user): void
  {
    if ($model == null) throw new Exception("خطایی رخ داده است مجددا تلاش کنید");

    if ($modelId == null) throw new Exception("خطایی رخ داده است مجددا تلاش کنید");

    $model = @Comment::MODELS[$model];
    if (!$model) throw new Exception("خطایی رخ داده است مجددا تلاش کنید");

    if ($text == null || strlen($text) < 10) throw new Exception("متن دیدگاه باید حداقل ده کاراکتر باشد");

    if (!($user instanceof User)) throw new Exception("حساب کاربری یافت نشد");
    if (!$user->approved) throw new Exception("حساب کاربری تایید نشده است");

  }


}
