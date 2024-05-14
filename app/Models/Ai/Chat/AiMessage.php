<?php

namespace App\Models\Ai\Chat;

use App\Panel\helpers\XModelHelper;
use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $user_id
 * @property $first_message
 * @property $created_at
 * @property $updated_at
 */
class AiMessage extends Model
{
  use XModelHelper;
  protected $guarded = ["id"];
}
