<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

  public function up(): void
  {
    Schema::create('ai_messages', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('user_id')->nullable();
      $table->string('first_message')->nullable();
      $table->timestamps();
    });

    Schema::create('ai_message_lines', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('message_id')->nullable();
      $table->foreign('message_id')->references('id')->on('ai_messages')->onDelete('cascade');

      $table->enum('type',["admin","user"]);
      $table->longText('text')->nullable();
      $table->timestamps();
    });

  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('ai_message_lines');
    Schema::dropIfExists('ai_messages');
  }
};
