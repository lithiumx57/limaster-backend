<?php

namespace App\Models;

use App\Panel\helpers\XModelHelper;
use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $model
 * @property $model_id
 * @property $text
 * @property $from_id
 * @property $to_id
 * @property $seen
 * @property $created_at
 * @property $updated_at
 */
class Notification extends Model
{
  use XModelHelper;

  protected $guarded = ["id"];




}
