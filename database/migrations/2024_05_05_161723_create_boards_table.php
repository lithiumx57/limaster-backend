<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

  public function up(): void
  {
    Schema::create('pm_boards', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("project_id");
      $table->foreign("project_id")->references("id")->on("pm_projects")->onDelete("cascade");

      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("pm_project_users")->onDelete("cascade");

      $table->string('name');
      $table->timestamps();
    });


    Schema::create('pm_board_user', function (Blueprint $table) {

      $table->unsignedBigInteger("pm_board_id");
      $table->foreign("pm_board_id")->references("id")->on("pm_boards")->onDelete("cascade");

      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("pm_project_users")->onDelete("cascade");

      $table->primary([
        "user_id",
        "pm_board_id"
      ]);
    });


    Schema::create('pm_board_boxes', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("board_id");
      $table->foreign("board_id")->references("id")->on("pm_boards")->onDelete("cascade");
      $table->string("name");
      $table->unsignedInteger("position")->nullable()->default(0);
      $table->string("background")->nullable();
      $table->softDeletes();
      $table->timestamps();
    });

    Schema::create('pm_board_box_lines', function (Blueprint $table) {
      $table->id();

      $table->unsignedBigInteger("board_id");
      $table->foreign("board_id")->references("id")->on("pm_boards")->onDelete("cascade");

      $table->unsignedBigInteger("board_box_id");
      $table->foreign("board_box_id")->references("id")->on("pm_board_boxes")->onDelete("cascade");

      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("pm_project_users")->onDelete("cascade");

      $table->string("text");
      $table->integer("priority")->default(0);

      $table->unsignedInteger("position")->nullable()->default(0);
      $table->string("additional")->nullable();

      $table->softDeletes();
      $table->timestamps();
    });


    Schema::create('pm_board_box_line_user', function (Blueprint $table) {
      $table->unsignedBigInteger("box_line_id");
      $table->foreign("box_line_id")->references("id")->on("pm_board_box_lines")->onDelete("cascade");

      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("pm_project_users")->onDelete("cascade");
      $table->enum("type", ["reference", "only"])->nullable()->default("reference");

      $table->primary([
        "box_line_id",
        "user_id"
      ]);
    });


  }

  public function down(): void
  {
    Schema::dropIfExists('pm_board_box_line_user');
    Schema::dropIfExists('pm_board_box_lines');
    Schema::dropIfExists('pm_board_boxes');
    Schema::dropIfExists('pm_board_user');
    Schema::dropIfExists('pm_boards');
  }
};
