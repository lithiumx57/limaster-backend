<?php

namespace App\Models\ProjectManagement;

use App\Models\User;
use App\Panel\helpers\XModelHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property $id
 * @property $project_id
 * @property Project $project
 * @property $user_id
 * @property User $user
 * @property $username
 * @property $created_at
 * @property $updated_at
 */

class ProjectUser extends Model
{
  protected $guarded=["id"];
  protected $table="pm_project_users";
  use XModelHelper;


  public function project():BelongsTo
  {
    return $this->belongsTo(Project::class,"project_id");
  }

  public function user():BelongsTo
  {
    return $this->belongsTo(User::class);
  }



}
