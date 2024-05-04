<?php

namespace App\Models;

use App\Panel\helpers\XModelHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection;


/**
 * @property $id
 * @property $title
 * @property $slug
 * @property $description
 * @property $views_count
 * @property $user_id
 * @property $done
 * @property User $user
 * @property Collection<ForumLine> $lines
 * @property $approved
 * @property $created_at
 * @property $updated_at
 */
class Forum extends Model
{
  protected $guarded = ["id"];
  use XModelHelper;


  public function lines():HasMany
  {
    return $this->hasMany(ForumLine::class,"forum_id");
  }




  public function user():BelongsTo
  {
    return $this->belongsTo(User::class);
  }

}
