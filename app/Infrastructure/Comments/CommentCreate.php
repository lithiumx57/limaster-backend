<?php

namespace App\Infrastructure\Comments;

use App\Models\Comment;
use App\Panel\helpers\XStringHelper;
use Exception;

class CommentCreate
{

  /**
   * @throws Exception
   */
  public static function create(): bool
  {
    $name = request()->input("name");
    $contact = request()->input("contact");
    $description = request()->input("description");
    $model = request()->input("model");
    $modelId = request()->input("modelId");
    $parent = request()->input("parent");

    validate()->validateString($name, "نام", min: 3, max: 50);

    if (is_numeric($contact)) {
      if (strlen($contact) != 11) throw new Exception("شماره موبایل باید 11 کاراکتر باشد");
    } else {
      if (!XStringHelper::isEmail($contact)) throw new Exception("ایمیل وارد شده اشتباه است");
    }

    validate()->validateString($description, "توضیحات", min: 5, max: 4000);

    $model = @Comment::MODELS[$model];
    if (!$model) throw new Exception("خطای نامشخص رخ داد است");
//    if (!is_numeric($modelId)) throw new Exception("خطای نامشخص رخ داده است");


    if (hasIndex(Comment::CUSTOM_MODELS, $model)) {
      return $model::createComment($model, $modelId, $parent, $description, $name, $contact);
    }

    $object = $model::find($modelId);
    if (!($object instanceof $model)) throw new Exception("خطای نامشخص رخ داده است");
    if (!$object->canPostComment()) throw new Exception("خطای نامشخص رخ داده است");


    if (!is_numeric($parent)) $parent = 0;

    if ($parent > 0) {
      $comment = Comment::find($parent);
      if (!($comment instanceof Comment) || !$comment->approved) {
        throw new Exception("خطای نامشخص رخ داده است");
      }
    }

    if (auth()->check()) $userId = auth()->user()->id;
    else $userId = 0;

    Comment::create([
      "name" => $name,
      "contact" => $contact,
      "body" => $description,
      "model" => $model,
      "model_id" => $modelId,
      "parent" => $parent,
      "user_id" => $userId,
      "approved" => $object->defaultApproved(),
//      "likes" => [],
//      "dislikes" => [],
    ]);

    return $object->defaultApproved();

  }
}
