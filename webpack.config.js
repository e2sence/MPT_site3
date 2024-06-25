const path = require('path');

module.exports = {
  entry: './public/scripts/home.ts',
  mode: 'development',
  // mode: 'production',
  module: {
    rules: [
            {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
            },
        ],
    },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'
        ],
    },
  output: {
    filename: 'home.js',
    path: path.resolve(__dirname, 'dist'),
    },
}