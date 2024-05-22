<?php

namespace App\Models;

use App\Panel\Dynamic\LiModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Carbon;

//      $table->id();
//      $table->unsignedInteger("amount");
//      $table->string("description");
//      $table->enum("status", ["pending", "paying", "paid", "canceled"]);
//      $table->string("token");
//      $table->timestamps();

/**
 * @property $id
 * @property $amount
 * @property $description
 * @property string $status
 * @property string $link
 * @property $token
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Transaction extends LiModel
{

}
