<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {


  public function up(): void
  {
    Schema::create('transactions', function (Blueprint $table) {
      $table->id();
      $table->unsignedInteger("amount");
      $table->string("description");
      $table->string("link");
      $table->enum("status", ["pending", "paying", "paid", "canceled"]);
      $table->string("token")->nullable();
      $table->timestamps();
    });
  }


  public function down(): void
  {
    Schema::dropIfExists('transactions');
  }
};
