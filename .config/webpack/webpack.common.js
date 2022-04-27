const path = require('path');
const glob = require('glob');

// Webpack Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  stats: 'minimal',
  // Assemble entry points - default is all bundles in the script directory
  entry: {
    ...glob.sync('./src/styles/**/*.scss', { ignore: ['./src/styles/core/**', './src/styles/global.scss'] }).reduce((acc, path) => {
      const entry = path.replace(/^.*[\\\/]/, '').replace('.scss', '');
      acc[entry] = {
        import: path
      };

      return acc;
    }, {}),
    ...glob.sync('./src/scripts/**/*.js', { ignore: ['./src/scripts/core/**'] }).reduce((acc, path) => {
      const entry = path.replace(/^.*[\\\/]/, '').replace('.js', '');
      acc[entry] = {
        import: path
      };

      return acc;
    }, {}),
  },
  output: {
    path: path.resolve(__dirname, '../../shopify/assets')
  },
  resolve: {
    extensions: ['*', '.js', '.json'],
    alias: {
      // Alias React -> Preact
      // More info: https://preactjs.com/guide/v10/getting-started#aliasing-react-to-preact
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      '@': path.resolve(__dirname, '../../src/'),
      '@shopify-directory': path.resolve(__dirname, '../../shopify/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: {
              exposes: [
                {
                  globalName: '$',
                  override: true
                },
                {
                  globalName: 'jQuery',
                  override: true
                }
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            ignore: ["./node_modules/", "../../node_modules/"],
            plugins: [
              "@babel/plugin-transform-runtime",
              [
                "@babel/plugin-transform-react-jsx",
                {
                  // Set runtime to preact
                  runtime: "automatic",
                  importSource: "preact"
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: require(path.resolve(__dirname, '../postcss.config.js'))
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /**
     * don't clean files with the 'static' keyword in their filename
     * docs: https://github.com/johnagan/clean-webpack-plugin
     */
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!*static*']
    }),
    /**
     * docs: https://webpack.js.org/plugins/mini-css-extract-plugin
     */
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new RemoveEmptyScriptsPlugin()
  ]
}
