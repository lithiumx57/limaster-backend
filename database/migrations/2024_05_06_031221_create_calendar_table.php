<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {


  public function up(): void
  {
    Schema::create('tasks', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");
      $table->string("type")->default("personal");
      $table->timestamps();
    });


    Schema::create('task_user', function (Blueprint $table) {
      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");

      $table->unsignedBigInteger("task_id");
      $table->foreign("task_id")->references("id")->on("tasks")->onDelete("cascade");

      $table->primary(["user_id", "task_id"]);
    });


    Schema::create('task_lines', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("task_id");
      $table->foreign("task_id")->references("id")->on("tasks")->onDelete("cascade");
      $table->text("text");
      $table->unsignedInteger("position")->default(0);
      $table->enum("mode", ["once", "monthly", "yearly"])->default("once");
      $table->timestamp("start_at")->nullable();
      $table->timestamp("end_at")->nullable();
    });


  }


  public function down(): void
  {
    Schema::dropIfExists('task_lines');
    Schema::dropIfExists('task_user');
    Schema::dropIfExists('tasks');
  }
};
