const webpack = require('webpack')
const path = require('path')
const { join, resolve } = path

const node_env = process.env.node_env || process.env.NODE_ENV

let config = {
  entry: ['@babel/polyfill', `${resolve(__dirname, 'src')}/index.js`],
  output: {
    filename: 'webchat.js',
    path: resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  mode: 'production',
  optimization: {
    minimize: true,
  },
  resolve: {
    symlinks: true,
    alias: {
      react: resolve(__dirname, 'node_modules/isomorphic-react/dist/react.js'),
      'react-dom': resolve(__dirname, 'node_modules/isomorphic-react-dom/dist/react-dom.js'),
      'styled-components': resolve(
        __dirname,
        '../../node_modules/styled-components/dist/styled-components.browser.esm.js'
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}

if (node_env !== 'production' && node_env !== 'test') {
  // development
  config = {
    ...config,
    mode: 'development',
  }
}

module.exports = config
