<?php

namespace App\Models;

use App\Panel\helpers\XModelHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property $id
 * @property $user_id
 * @property $model
 * @property $model_id
 * @property User $user
 * @property $created_at
 * @property $updated_at
 */
class Like extends Model
{
  use XModelHelper;

  protected $guarded = ['id'];

  public const MODELS = [
//    "project" => Project::class,
    "comment" => Comment::class,
//    "boardBoxLine" => BoardBoxLine::class,
    "article" => Article::class,
//    "job" => Job::class,
//    "forumQuestion" => ForumQuestion::class
  ];

  public static function getModel(string $model): string
  {
    return self::MODELS[$model];
  }


  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }


  public static function hasLike($model, $modelId, $user = null): bool
  {

    if (!$user) {
      $user = auth("api")->user();
    }

    if (!($user instanceof User)) return false;

    return Like::where("model", $model)->where("model_id", $modelId)->where("user_id", $user->id)->first() instanceof Like;
  }


}
