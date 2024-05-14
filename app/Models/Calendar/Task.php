<?php

namespace App\Models\Calendar;

use App\Models\User;
use App\Panel\helpers\XModelHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property $id
 * @property $user_id
 * @property User $user
 * @property $type
 * @property $created_at
 * @property $updated_at
 */
class Task extends Model
{
  use XModelHelper;

  public const TYPE_PERSONAL = 'personal';
  protected $guarded = ["id"];

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }


  public function users(): BelongsToMany
  {
    return $this->belongsToMany(User::class);
  }

  public function lines():HasMany
  {
    return $this->hasMany(TaskLine::class);
  }

}


