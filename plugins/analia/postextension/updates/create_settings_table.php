<?php namespace Analia\PostExtension\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateSettingsTable extends Migration
{
    public function up()
    {
        Schema::create('analia_postextension_settings', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('post_id')->unsigned()->index(); // Foreign key needed to Blog's post_id
            $table->string('default_background_color')->nullable();
            $table->string('project_logo')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('analia_postextension_settings');
    }
}
