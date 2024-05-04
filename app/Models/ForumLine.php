<?php

namespace App\Models;

use App\Panel\helpers\XModelHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection;


/**
 * @property $id
 * @property $forum_id
 * @property $user_id
 * @property User $user
 * @property Forum $forum
 * @property Collection<ForumLine> $children
 * @property $likes_count
 * @property $done
 * @property $dislikes_count
 * @property $description
 * @property $created_at
 * @property $updated_at
 */
class ForumLine extends Model
{
  use XModelHelper;

  protected $guarded = ["id"];


  public function user():BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function forum():BelongsTo
  {
    return $this->belongsTo(Forum::class);
  }


  public function children():HasMany
  {
    return $this->hasMany(ForumLine::class, 'parent');
  }

}
