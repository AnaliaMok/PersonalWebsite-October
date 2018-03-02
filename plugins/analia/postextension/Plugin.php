<?php namespace Analia\PostExtension;

use Backend;
use System\Classes\PluginBase;
use RainLab\Blog\Models\Post as PostModel;
use RainLab\Blog\Controllers\Posts as PostsController;
use Analia\PostExtension\Models\Setting as SettingModel;
use Analia\PostExtension\Models\SidebarContent as SidebarContentModel;

/**
 * PostExtension Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'PostExtension',
            'description' => 'Adds custom fields to Rainlab\'s blog posts',
            'author'      => 'Analia',
            'icon'        => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    // public function register()
    // {
    //
    // }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {
      PostModel::extend(function($model){
        $model->hasOne['setting'] = ['Analia\PostExtension\Models\Setting'];
        $model->hasOne['sidebar_content'] = ['Analia\PostExtension\Models\SidebarContent'];
      });

      // Can now access setting fields by: $post->setting->default_background_color
      PostsController::extendFormFields(function($form, $model, $context){

        // Only extend when mode is post
        if(!$model instanceof PostModel){
          return;
        }

        // Stop if model doesn't exists
        if(!$model->exists){
          return;
        }

        // Make sure post model always has a setting
        SettingModel::getFromPost($model);

        $form->addSecondaryTabFields([
          'setting[default_background_color]'  => [
            'label' => 'Default Background Color',
            'tab'   => 'Settings',
            'size'  => 'tiny',
            'span'  => 'left',
          ],
          'setting[project_logo]'  => [
            'label' => 'project_logo',
            'tab'   => 'Settings',
            'size'  => 'tiny',
            'span'  => 'left',
          ],
        ]);

        // Make sure post model always has a SidebarContent instance
        SidebarContentModel::getFromPost($model);

        $form->addSecondaryTabFields([
          'sidebar_content[technologies]' => [
            'label'   => 'Technologies (Optional)',
            'tab'     => 'Sidebar Content',
            'type'    => 'richeditor',
            'size'    => 'huge',
            'placeholder' => 'Enter a ul here',
          ],
          'sidebar_content[contributors]' => [
            'label'   => 'Contributors (Optional)',
            'tab'     => 'Sidebar Content',
            'type'    => 'richeditor',
            'size'    => 'huge',
            'placeholder' => 'Enter a ul here',
          ],
        ]);

      });

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    // public function registerComponents()
    // {
    //     return []; // Remove this line to activate
    //
    //     return [
    //         'Analia\PostExtension\Components\MyComponent' => 'myComponent',
    //     ];
    // }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'analia.postextension.some_permission' => [
                'tab' => 'PostExtension',
                'label' => 'Some permission'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    // public function registerNavigation()
    // {
    //     return []; // Remove this line to activate
    //
    //     return [
    //         'postextension' => [
    //             'label'       => 'PostExtension',
    //             'url'         => Backend::url('analia/postextension/mycontroller'),
    //             'icon'        => 'icon-leaf',
    //             'permissions' => ['analia.postextension.*'],
    //             'order'       => 500,
    //         ],
    //     ];
    // }
}
