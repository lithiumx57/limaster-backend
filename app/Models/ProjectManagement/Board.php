<?php

namespace App\Models\ProjectManagement;

use App\Models\User;
use App\Panel\helpers\XModelHelper;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @property $id
 * @property $name
 * @property $project_id
 * @property $user_id
 * @property Project $project
 * @property User $user
 * @property $created_at
 * @property $updated_at
 */
class Board extends Model
{
  use XModelHelper;



  protected $guarded = ["id"];


  public function user():BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  public function project():BelongsTo
  {
    return $this->belongsTo(Project::class);
  }


  public function users():BelongsToMany
  {
    return $this->belongsToMany(Board::class,"pm_boards_users","pm_board_id","user_id");
  }


  public function hasAccess():bool
  {
    return true;
  }



}
