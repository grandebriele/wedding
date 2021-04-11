let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist').setPublicPath('dist');
mix.sass('src/sass/app.scss', 'dist');
