<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {


  public function up(): void
  {
    Schema::create('categories', function (Blueprint $table) {
      $table->id();
      $table->string("title");
      $table->string("slug");
      $table->boolean("approved");
      $table->unsignedInteger("position")->nullable()->default(0);
      $table->unsignedInteger("model_count")->nullable()->default(0);
      $table->text("image")->nullable();
      $table->text("description")->nullable();
      $table->string("model");
      $table->unsignedBigInteger("parent");
      $table->softDeletes();
      $table->timestamps();
    });
  }


  public function down(): void
  {
    Schema::dropIfExists('categories');
  }
};
