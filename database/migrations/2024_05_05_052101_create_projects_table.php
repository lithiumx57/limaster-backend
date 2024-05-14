<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

  public function up(): void
  {
    Schema::create('pm_projects', function (Blueprint $table) {
      $table->id();
      $table->string('name');
      $table->string('uuid');

      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("users")->onDelete("cascade");

      $table->string('image')->nullable();
      $table->timestamps();
    });

    Schema::create('pm_project_users', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('project_id');
      $table->foreign('project_id')->references('id')->on('pm_projects')->onDelete('cascade');

      $table->unsignedBigInteger('user_id')->nullable();
      $table->string("username");
      $table->timestamps();
    });


  }


  public function down(): void
  {
    Schema::dropIfExists('pm_project_users');
    Schema::dropIfExists('pm_projects');
  }
};
