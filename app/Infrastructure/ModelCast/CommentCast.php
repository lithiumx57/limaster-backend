<?php

namespace App\Infrastructure\ModelCast;

use App\Infrastructure\Comments\CommentableInterface;
use App\Models\Comment;
use App\Models\User;

class CommentCast
{
  public static function castAll(CommentableInterface $commentable): array
  {
    $model = get_class($commentable);
    $id = $commentable->id;
    $comments = Comment::where("model", $model)->where("model_id", $id)->get();
    return self::castCollection($comments);
  }

  public static function castCollection($collection): array
  {
    $records = [];
    foreach ($collection as $row) $records[] = self::cast($row);
    return $records;
  }

  public static function cast(Comment $comment): array
  {
    $user = $comment->user;
    if ($user instanceof User) $avatar = $user->getAvatar();
    else $avatar = getDefaultAvatar();

    return [
      "id" => $comment->id,
      "parent" => $comment->parent,
      "name" => $comment->name,
      "contact" => $comment->contact,
      "avatar" => $avatar,
      "body" => $comment->body,
      "createdAt" => getAgoJalali($comment->created_at),
//      "children" => self::castCollection($comment->children),
    ];
  }

  public static function castFromRequest():array
  {
    $model = request()->input("model");
    $modelId = request()->input("modelId");
    $comments = Comment::where("model", $model)->where("model_id", $modelId)->get();
    return self::castCollection($comments);
  }
}