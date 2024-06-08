<?php

namespace App\Models;

use App\Panel\helpers\XModelHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property $id
 * @property $user_id
 * @property User $user
 * @property $amount
 * @property $used
 * @property $token
 * @property $wallet
 * @property $status
 * @property $created_at
 * @property $updated_at
 */
class WalletLog extends Model
{
  use XModelHelper;

  protected $guarded = ["id"];


  public const STATUS_PENDING = "pending";
  public const STATUS_PAID = "paid";

  public const STATUSES=[
    self::STATUS_PAID,
  ];

  public function isSuccess():bool
  {
    return hasArrayIndex(self::STATUSES,$this->status);
  }

  public function user():BelongsTo
  {
    return $this->belongsTo(User::class);
  }

}

