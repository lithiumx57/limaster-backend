<?php

namespace App\Models\Calendar;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


/**
 * @property $id
 * @property $task_id
 * @property Task $task
 * @property $text
 * @property $position
 * @property $mode
 * @property $start_at
 * @property $end_at
 * @property $created_at
 * @property $updated_at
 */
class TaskLine extends Model
{
  protected $guarded = ["id"];

  public const MODE_ONCE = "once";
  public const MODE_MONTHLY = "monthly";
  public const MODE_YEARLY = "yearly";

  public $timestamps=false;



  public function task(): BelongsTo
  {
    return $this->belongsTo(Task::class);
  }





}
