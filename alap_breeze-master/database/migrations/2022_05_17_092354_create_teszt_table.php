<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teszt', function (Blueprint $table) {
            $table->increments('id');
            $table->string('kerdes',255);
            $table->string('v1',255);
            $table->string('v2',255);
            $table->string('v3',255);
            $table->string('v4',255)->default("v1");
            $table->integer('kategoriaId')->unsigned();

            $table->foreign('kategoriaId')->references('id')->on('kategoria');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teszt');
    }
};
