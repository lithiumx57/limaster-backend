<?php

namespace App\Infrastructure\ProjectManagement;

use Illuminate\Database\Connection;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ProjectDatabaseGenerator
{

  public static function getConnection($projectId): Connection
  {
    $path = database_path("pm/projects_" . $projectId . ".sqlite");
    if (!file_exists($path)) file_put_contents($path, '');
    config(['database.connections.project_' . $projectId => ['driver' => 'sqlite', 'database' => $path, 'prefix' => '']]);
    if (!Schema::connection("project_" . $projectId)->hasTable('boards')) self::generateConnection('project_' . $projectId);
    return DB::connection('project_' . $projectId);
  }


  private static function generateConnection($connection): void
  {

    Schema::connection($connection)->create('boards', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("project_id");
      $table->unsignedBigInteger("user_id");
//      $table->foreign("user_id")->references("id")->on("project_users")->onDelete("cascade");
      $table->string('name');
      $table->timestamps();
    });


    Schema::connection($connection)->create('board_user', function (Blueprint $table) {

      $table->unsignedBigInteger("board_id");
      $table->foreign("board_id")->references("id")->on("boards")->onDelete("cascade");

      $table->unsignedBigInteger("user_id");

      $table->primary([
        "user_id",
        "board_id"
      ]);
    });


    Schema::connection($connection)->create('board_boxes', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger("board_id");
      $table->foreign("board_id")->references("id")->on("boards")->onDelete("cascade");
      $table->string("name");
      $table->string("token");
      $table->unsignedInteger("position")->nullable()->default(0);
      $table->string("background")->nullable();
      $table->softDeletes();
      $table->timestamps();
    });

    Schema::connection($connection)->create('board_box_lines', function (Blueprint $table) {
      $table->id();

      $table->unsignedBigInteger("board_id");
      $table->foreign("board_id")->references("id")->on("boards")->onDelete("cascade");

      $table->unsignedBigInteger("board_box_id");
      $table->foreign("board_box_id")->references("id")->on("board_boxes")->onDelete("cascade");

      $table->unsignedBigInteger("user_id");

      $table->string("token");

      $table->string("text");
      $table->integer("priority")->default(0);

      $table->unsignedInteger("position")->nullable()->default(0);
      $table->string("additional")->nullable();

      $table->softDeletes();
      $table->timestamps();
    });


    Schema::connection($connection)->create('board_box_line_user', function (Blueprint $table) {
      $table->unsignedBigInteger("box_line_id");
      $table->foreign("box_line_id")->references("id")->on("board_box_lines")->onDelete("cascade");

      $table->unsignedBigInteger("user_id");
      $table->foreign("user_id")->references("id")->on("project_users")->onDelete("cascade");
      $table->enum("type", ["reference", "only"])->nullable()->default("reference");

      $table->primary([
        "box_line_id",
        "user_id"
      ]);
    });


  }
}