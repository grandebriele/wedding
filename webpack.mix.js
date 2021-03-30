let mix = require('laravel-mix');

mix.js('src/script/main.js', 'dist').setPublicPath('dist');
mix.sass('src/sass/style.scss', 'dist');
