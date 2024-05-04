<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('comments', function (Blueprint $table) {
      $table->id();

      $table->string("name");
      $table->string("contact")->nullable();

      $table->unsignedBigInteger("user_id")->default(0);

      $table->longText("likes")->default("");
      $table->longText("dislikes")->default("");

      $table->string("model");
      $table->unsignedBigInteger("model_id");

      $table->boolean("approved")->nullable()->default(false);
      $table->longText("body");
      $table->unsignedBigInteger("parent");

      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('comments');
  }
};
