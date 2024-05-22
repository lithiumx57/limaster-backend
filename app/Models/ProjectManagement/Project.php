<?php

namespace App\Models\ProjectManagement;

use App\Models\User;
use App\Panel\helpers\XModelHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection;

/**
 * @property $id
 * @property $name
 * @property $image
 * @property $uuid
 * @property $user_id
 * @property User $user
 * @property Collection<ProjectUser> $users
 * @property $created_at
 * @property $updated_at
 */
class Project extends Model
{
  protected $guarded = ["id"];
  protected $table = "pm_projects";
  use XModelHelper;


  public function users(): HasMany
  {
    return $this->hasMany(ProjectUser::class, "project_id");
  }

  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function getImage(): string
  {
    if ($this->image) {
      return "/files/uploads/project-management/" . $this->image;
    }
    return env("APP_URL") . "/app/no-image.jpg";
  }


  public function hasAccess(): bool
  {
    if (!auth()->check()) return false;
    if ($this->user_id == auth()->id()) return true;
    return $this->users()->where("username", auth()->user()->email)->exists();
  }


  public function boards():HasMany
  {
    return $this->hasMany(Board::class);
  }


}
