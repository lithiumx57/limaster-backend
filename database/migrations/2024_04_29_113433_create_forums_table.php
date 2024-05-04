<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

  public function up(): void
  {
    Schema::create('forums', function (Blueprint $table) {
      $table->id();
      $table->string('title');
      $table->string('slug');
      $table->boolean("done")->default(false)->nullable();
      $table->longText('description');
      $table->unsignedInteger('views_count')->default(0);
      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");
      $table->boolean("approved")->default(true);
      $table->timestamps();
    });

    Schema::create('forum_lines', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("forum_id");
      $table->foreign("forum_id")->references("id")->on("forums")->onDelete("cascade");

      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");
      $table->boolean("done")->default(false)->nullable();

      $table->unsignedInteger("likes_count")->nullable()->default(0);
      $table->unsignedInteger("dislikes_count")->nullable()->default(0);

      $table->longText('description');
      $table->unsignedBigInteger("parent");
      $table->timestamps();
    });

  }


  public function down(): void
  {
    Schema::dropIfExists('forum_lines');
    Schema::dropIfExists('forums');
  }
};
