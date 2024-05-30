<?php

namespace App\Models;

use App\Infrastructure\Comments\CommentableInterface;
use App\Infrastructure\Likes\LikableInterface;
use App\Models\ProjectManagement\Board;
use App\Panel\Dynamic\LiModel;
use Exception;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Collection;
use function Pest\Laravel\getConnection;

/**
 * @property $id
 * @property $name
 * @property $contact
 * @property $user_id
 * @property User $user
 * @property $model
 * @property $model_id
 * @property $approved
 * @property Collection<Comment> $children
 * @property $body
 * @property $parent
 * @property $likes
 * @property $dislikes
 * @property $deleted_at
 * @property $updated_at
 * @property $created_at
 */
class Comment extends LiModel implements LikableInterface, CommentableInterface
{
  use SoftDeletes;

  protected ?string $title = "کامنت";

  public const MODELS = [
    "comment" => Comment::class,
    "article" => Article::class,
    "boardLine" => Board::class
  ];


  public const CUSTOM_MODELS = [
    Board::class
  ];



  protected $casts = [
    "likes" => [],
    "dislikes" => []
  ];



  public function children(): HasMany
  {
    return $this->hasMany(Comment::class, "parent", "id");
  }


  public function updateLikesCount(): void
  {
    $result = Like::where("model", Comment::class)->where("model_id", $this->id)->count();
    $this->update([
      "likes_count" => $result
    ]);
  }

  public function getLikesCount(): int
  {
    return $this->likes_count;
  }

  public function canPostComment(): bool
  {
    return $this->approved;
  }

  public function updateCommentsCount(): void
  {

  }

  public function defaultApproved(): bool
  {
    return false;
  }

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }


}
