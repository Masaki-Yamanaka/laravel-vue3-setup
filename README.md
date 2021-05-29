# laravel-vue3-setup

How to setup vue3 and Typescript in Laravel

## Setup

### Vue 3.x

- You must install
  - Vue >= 3.x
  - laravel-mix >= 6.x
  - vue-template-compiler
- If not, you can install using:

```bash
yarn add -D laravel-mix@next vue@next
```

### Install

```bash
yarn add -D ts-loader typescript @types/page @babel/plugin-syntax-dynamic-import
yarn add page
```

### Typescript

- Add `tsconfig.json` in root directory

```bash
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
  },
  "include": [
    "resources/**/*"
  ],
}
```

### Laravel-mix

- Change `webpack.mix.js`

```bash
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
```

### Folder

- Delete js folder under resources and copy ts folder
