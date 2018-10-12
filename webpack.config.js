const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.port || 3000

module.exports = {
  mode: 'development',
  entry: './src/index.js', //default value so not strictly needed anymore
  output: {
    filename: 'bundle.[hash].js'
  },
  devtool: 'inline-source-map',
  module: { //configure the modules the application will include
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /].css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', //configuration to use CSS modules
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  devServer: {
    host: 'localshost',
    port: port,
    historyApiFallback: true,
    open: true //opens browser and launches application automatically
  }
}