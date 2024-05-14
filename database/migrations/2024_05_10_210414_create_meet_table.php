<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

  protected $connection = "meet";

  public function up(): void
  {



    Schema::create('friends', function (Blueprint $table) {
      $table->unsignedBigInteger('user_1');
      $table->unsignedBigInteger('user_2');
      $table->string('status');
      $table->primary(['user_1', 'user_2']);
    });


    Schema::create('groups', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('user_id');
      $table->string('name');
      $table->string("type");
      $table->string("latest_message")->nullable();
      $table->boolean('is_started')->default(false);
      $table->string('avatar')->nullable();
      $table->timestamps();
    });

    Schema::create('group_members', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('user_id');
      $table->unsignedBigInteger('group_id');
      $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');
      $table->timestamps();
    });

    Schema::create('messages', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('group_id');
      $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');

      $table->unsignedBigInteger('user_id');

      $table->boolean('is_edited')->default(false);

      $table->string("status")->default("sent");

      $table->longText("message");
      $table->enum("type", ["text", "image", "video", "document", "audio", "unknown"])->default("text");

      $table->timestamps();
    });


    Schema::create('notifications', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('group_id');
      $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');

      $table->unsignedBigInteger('user_id');
      $table->string("type")->comment("عضویت یا پیام جدید");

      $table->longText("message");

      $table->timestamps();
    });


    Schema::create('calls', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('caller_id');
      $table->unsignedBigInteger('group_id');
      $table->foreign('group_id')->references("id")->on("groups")->onDelete("cascade");
      $table->string("status");
      $table->timestamp("start_at");
      $table->timestamp("end_at")->nullable();
    });

    Schema::create('call_users', function (Blueprint $table) {
      $table->id();

      $table->unsignedBigInteger('call_id');
      $table->foreign('call_id')->references("id")->on("calls")->onDelete("cascade");

      $table->unsignedBigInteger('user_id');

      $table->text('tracks')->comment("ترک ها");

    });


  }

  public function down(): void
  {
    Schema::dropIfExists('call_users');
    Schema::dropIfExists('calls');
    Schema::dropIfExists('notifications');
    Schema::dropIfExists('messages');
    Schema::dropIfExists('group_members');
    Schema::dropIfExists('groups');
    Schema::dropIfExists('friends');
  }
};
