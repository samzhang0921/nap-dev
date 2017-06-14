var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./app/index.js",
    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js",
      minChunks: Infinity
    }),
    new ExtractTextPlugin("/styles.css")
  ],
  module: {
    rules: [{
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
        }),
      }
    ]
  }
};
