<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {


  public function up(): void
  {
    Schema::create('articles', function (Blueprint $table) {
      $table->id();
      $table->string("title");
      $table->string("slug");

      $table->unsignedBigInteger("category_id");
      $table->foreign("category_id")->references("id")->on("categories")->onDelete("cascade");

      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");
      $table->string("username");
      $table->string("time_to_read")->nullable();
      $table->longText("description");
      $table->text("images")->nullable();
      $table->text("search")->nullable();
      $table->boolean("approved")->nullable()->default(true);
      $table->integer("comments_count")->nullable()->default(0);
      $table->integer("views_count")->nullable()->default(0);
      $table->integer("likes_count")->nullable()->default(0);
      $table->text("meta")->nullable();
      $table->boolean("comment_active")->nullable()->default(true);
      $table->timestamp("publish_at");
      $table->softDeletes();
      $table->timestamps();
    });
  }


  public function down(): void
  {
    Schema::dropIfExists('articles');
  }
};
