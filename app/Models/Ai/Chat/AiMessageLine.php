<?php

namespace App\Models\Ai\Chat;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $message_id
 * @property $type
 * @property $text
 * @property $created_at
 * @property $updated_at
 */
class AiMessageLine extends Model
{
  protected $guarded = ["id"];
}
