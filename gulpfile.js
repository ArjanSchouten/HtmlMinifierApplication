var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less')
        .browserify('app.js')
        .copy('resources/assets/dependencies/bootstrap/fonts', 'public/fonts')
        .version([
            'public/css/app.css',
            'public/js/app.js'
        ]);
});
