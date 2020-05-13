const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'final'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.html$/i, loader: 'html-loader' },
      {test: /\.css$/i,
        use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
         template: './src/index.ejs' 
    })
  ]
};