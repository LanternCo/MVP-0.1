<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('group_id');
            $table->unsignedBigInteger('user_id');
            $table->string('title');
            $table->longtext('body');
            $table->boolean('is_complete');
            $table->boolean('admin_authored');
            $table->boolean('user_authored');
            $table->timestamps();
        });

        Schema::table('tasks', function ($table) {
            $table
                ->foreign('user_id')
                ->references('id')
                ->on('users');
        });

        Schema::table('tasks', function ($table) {
            $table
                ->foreign('group_id')
                ->references('id')
                ->on('task_groups');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}

    // public function down()
    // {
    //     Schema::dropIfExists('tasks');
    // }
