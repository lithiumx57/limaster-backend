<?php

namespace App\Models;

use App\Panel\helpers\XModelHelper;
use Illuminate\Database\Eloquent\Model;

/**
 * @property $id
 * @property $user_id
 * @property User $user
 * @property $amount
 * @property $used
 * @property $token
 * @property $status
 * @property $created_at
 * @property $updated_at
 */
class WalletLog extends Model
{
  use XModelHelper;
  protected $guarded=["id"];



}

