let mix = require('laravel-mix');

mix.js('src/main.js', 'dist').setPublicPath('dist');
mix.sass('src/style.scss', 'dist');
