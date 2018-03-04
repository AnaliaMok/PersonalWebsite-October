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
    if($post->meta){
        return $post->meta;
    }

    $meta = new static;
    $meta->post = $post;
    $meta->save();

    // meta reverse relationship
    $post->meta = $meta;

    return $meta;
    }
}
