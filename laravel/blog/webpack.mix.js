const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.jsx', 'public/js' , 'resources/js/')
   .react() // Enable React support
   .sass('resources/sass/app.scss', 'public/css')
   .postCss("resources/css/app.css", "public/css", [
    require("tailwindcss"),
  ]).webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
})

// Optional: Customize Babel configuration
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Match both .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
});
