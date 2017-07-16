var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module : {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader?localIdentName=[name]__[local]--[hash:base64:5]", "sass-loader"]
      },
      {
        test   : /\.js$/,
        loader : 'babel-loader',
        options: {
          presets: ['env', 'react']
        },
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
