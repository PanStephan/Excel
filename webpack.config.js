const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    entry: {
      app: './src/app.js'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: "js/[name].bundle.js",
    },
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      port: 8000,
    },
    watchOptions: {
      ignored: /node_modules/
    },
    plugins: [],
    module: {
      rules: []
    }
}

/**
 * 
 * Rules
 * 
 */


config.module.rules.push({ 
    test: /\.pug$/i, 
    use: ["pug-loader"] 
})

// config.module.rules.push({
//   rules: [
//     {
//       test: /\.js$/,
//       loader: "babel-loader",
//       exclude: /(node_modules)/
//     }
//   ]
// })

config.module.rules.push({ 
    test: /\.(sa|sc|c)ss$/i, 
    use: ExtractTextPlugin.extract({ 
        fallback: "style-loader", 
        use: ["css-loader", "sass-loader"] 
    }) 
})

config.module.rules.push({ 
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
      name: '[name].[ext]',
      outputPath: 'fonts/'
    }
})

config.module.rules.push({ 
    test: /\.(gif|png|jpe?g|svg)$/i, 
    use: [
        { 
          loader: 'file-loader', 
          options: { 
              name(file) { 
                  if (process.env.NODE_ENV === 'development') {
                      return '[path][name].[ext]';
                  }
    
                  return '[hash].[ext]';
              },
              outputPath: (url, resourcePath, context) => {
                  const relativePath = path.relative(context, resourcePath);

                  if (/images/.test(context)) {
                      return `/images/${url}`;
                  }

                  return `/images/${url}`;
              },
          }
        }, { 
            loader: 'image-webpack-loader', 
            options: { 
              disable: true 
            } 
        } 
    ]
})


/**
 * 
 * Plugins
 * 
 */



config.plugins.push(new HtmlWebpackPlugin({ filename: 'index.html', template: 'src/views/index.pug' }))
config.plugins.push(new ExtractTextPlugin("css/bundle.css"))

module.exports = (env, argv) => {


    /**
     * Development
     */


    if (argv.mode === 'development') {}

    /**
     * Production
     */


    if (argv.mode === 'production') {}

    config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(argv.mode) }))
    
    return config;
}