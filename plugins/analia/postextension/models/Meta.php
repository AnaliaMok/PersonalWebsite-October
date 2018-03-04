<?php namespace Analia\PostExtension\Models;

use Model;

/**
 * Meta Model
 */
class Meta extends Model
{
    /**
     * @var string The database table used by the model.
     */
    public $table = 'analia_postextension_metas';

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
    if($post->setting){
        return $post->setting;
    }

    $setting = new static;
    $setting->post = $post;
    $setting->save();

    // Setting reverse relationship
    $post->setting = $setting;

    return $setting;
    }
}
