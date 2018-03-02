<?php namespace Analia\PostExtension\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateSidebarContentsTable extends Migration
{
    public function up()
    {
        Schema::create('analia_postextension_sidebar_contents', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('post_id')->unsigned()->index(); // Foreign key needed to Blog's post_id
            $table->text('technologies')->nullable(); // Foreign key needed to Blog's post_id
            $table->text('contributors')->nullable(); // Foreign key needed to Blog's post_id
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('analia_postextension_sidebar_contents');
    }
}
