const autoprefixer = require('autoprefixer');

module.exports = [{
    entry: ['./app/scss/styles.scss', './app/js/es2015.js'],
    output: {
      filename: 'dist/js/bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'dist/css/styles.css',
              },
            },
            { loader: 'extract-loader'},
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                 plugins: () => [autoprefixer()]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['./node_modules']
                  }
              }
            },
          ]
        },

        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
          },
        },
      ]
    },
    externals: {
      moment: 'moment'
  }
  }];