<?php namespace Analia\PostExtension\Models;

use Model;

/**
 * SidebarContent Model
 */
class SidebarContent extends Model
{
    /**
     * @var string The database table used by the model.
     */
    public $table = 'analia_postextension_sidebar_contents';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    /**
     * @var array Relations
     */
    public $belongsTo = [
      'post'  => ['RainLab\Blog\Models\Post']
    ];

    // Helper method to make sure each post has a settings instance
    public static function getFromPost($post){
      if($post->sidebar_content){
        return $post->sidebar_content;
      }

      $sidebar_content = new static;
      $sidebar_content->post = $post;
      $sidebar_content->save();

      // Setting reverse relationship
      $post->setting = $sidebar_content;

      return $sidebar_content;
    }
}
