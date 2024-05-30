<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

  protected $connection = "pgsql";

  public function up(): void
  {
    Schema::create('meet_groups', function (Blueprint $table) {
      $table->id();
      $table->string('code');
      $table->string('status');
      $table->unsignedInteger('owner')->comment("user id");
      $table->timestamps();
    });

    Schema::create('meet_group_users', function (Blueprint $table) {
      $table->id();
      $table->string("user_id");
      $table->unsignedBigInteger("meet_group_id");
      $table->foreign('meet_group_id')->references('id')->on("meet_groups")->onDelete('cascade');
      $table->text('tracks')->comment("ترک ها")->nullable();
      $table->timestamps();
    });

  }


  public function down(): void
  {
    Schema::dropIfExists('meet_group_users');
    Schema::dropIfExists('meet_groups');
  }
};
