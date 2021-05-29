const mix = require('laravel-mix');
const ASSET_PATH = process.env.ASSET_PATH || '/';

mix.js('resources/ts/app.ts', 'public/js')
  .vue()
  .sass('resources/sass/app.scss', 'public/css');

mix
  .babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  })
  .setResourceRoot(ASSET_PATH);

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
  }
});