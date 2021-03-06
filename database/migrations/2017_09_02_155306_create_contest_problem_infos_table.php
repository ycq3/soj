<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContestProblemInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contest_problem_infos', function (Blueprint $table) {
            $table->unsignedInteger('id');
            $table->char('problem_id');
            $table->unsignedInteger('ac_user')->default(0);
            $table->unsignedInteger('pe')->default(0);
            $table->unsignedInteger('wa')->default(0);
            $table->unsignedInteger('ce')->default(0);
            $table->unsignedInteger('re')->default(0);
            $table->unsignedInteger('tle')->default(0);
            $table->unsignedInteger('ole')->default(0);
            $table->unsignedInteger('mle')->default(0);
            $table->primary('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contest_problem_infos');
    }
}
