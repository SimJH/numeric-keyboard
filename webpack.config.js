const path = require('path')
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    raw: "./vendor/raw/index.js",
    react: "./vendor/react/index.js",
    vue: "./vendor/vue/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'numeric_keyboard.[name].js',
    library: 'numericKeyboard',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, 'lib')
    }
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: 'style-loader!css-loader!stylus-loader'
          }
        }
      },
      {
        test: /\.woff$/,
        exclude: /node_modules/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: false,
  plugins: isProd
    ? [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
        })
      ]
    : []
}
