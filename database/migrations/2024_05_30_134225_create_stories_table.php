<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */

  /**
   * @property $id
   * @property $type
   * @property $icon
   * @property $path
   * @property $slug
   * @property $page
   * @property $approved
   */
  public function up(): void
  {
    Schema::create('stories', function (Blueprint $table) {
      $table->id();
      $table->string('type');
      $table->string('icon');
      $table->string('path');
      $table->string('slug');
      $table->string('page');
      $table->boolean('approved');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('stories');
  }
};
