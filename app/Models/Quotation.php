<?php

namespace App\Models;

use App\Panel\Dynamic\LiModel;
use App\Panel\helpers\XTagTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property $id
 * @property $description
 * @property $plus
 * @property $minus
 * @property $approved
 * @property $user_id
 * @property User $user
 * @property  $publish_at
 * @property  $deleted_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Quotation extends LiModel
{
  use XTagTrait;

  protected ?string $title = "کنایه";

  public static function getQuery()
  {
    return self::query()->where("approved", true)->where("publish_at", "<", Carbon::now());
  }


  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }


  protected $casts = [
    "minus" => "array",
    "plus" => "array"
  ];


}
