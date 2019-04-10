const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv').config({
  path: resolve('.env'),
})

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    main: path.resolve('./src/index.tsx'),
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'main.[hash:8].js',
    chunkFilename: 'bundle.[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common.async',
          chunks: 'async',
        },
        react: {
          test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
          name: 'react.sync',
          chunks: 'all',
        },
      },
    },
  },
  context: path.resolve('src'),
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': resolve('src'),
      '@root': resolve(''),
      '@utils': resolve('src/utils'),
      '@reduxs': resolve('src/redux-relate'),
    },
  },
  // externals: {
  // 	"react": "React",
  // 	"react-dom": "ReactDOM"
  // },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'source-map-loader',
      },
      // {
      // 	enforce: 'pre',
      // 	test: /\.js$/,
      // 	exclude: /node_modules/,
      // 	loader: 'eslint-loader'
      // },
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      // 	test: /\.(js|jsx)$/,
      // 	exclude: /node_modules/,
      // 	loader: 'babel-loader'
      // },
      {
        test: /\.(woff|ttf|png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/,
              name: '[1]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve('public/favicon.ico'),
      template: path.resolve('public/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
}
