const webpack = require('webpack');
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// hjl: tree-sharking需要和UglifyJsPlugin配合使用; 使用CDN之后意义不大
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const srcDir = path.join(__dirname, 'src');

module.exports = {
  entry: {
    index: 'index.js',
    //hjl: 需要配合下面的CommonsChunkPlugin才能把库文件从index中分类出来
    vendor: ["vue", "vue-router", "axios"]
  },
  output: {
    path: path.resolve(__dirname, "www/static"),
    publicPath: process.env.NODE_ENV === 'production' ? "/static/" : "/build/",
    filename: '[name].js',
  },
  resolve: {
    // hjl: vue-router, "module"对应着es6写法的输出
    mainFields: ['browser', 'module', 'main'],
    modules: [path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules")],
    extensions: ['.js', '.vue'],
    alias: {
      //You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build
      'vue': process.env.NODE_ENV === 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js',
      'axios': 'axios/dist/axios.min.js',
      'HELPER': path.resolve(__dirname, "src/helpers")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: [path.resolve(__dirname, "src/components"), path.resolve(__dirname, "src/views")],
        use: {
          //hjl: vue-loader会自动检测同项目下的babel配置，.babelrc
          loader: 'vue-loader',
          options: {
            loaders:{
              css: ExtractTextPlugin.extract({
                  use: [ 'css-loader'],
                  fallback: 'vue-style-loader'
              })
            },
            sourceMap: false
          }
        }
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader!css-loader',
          use: [
            {
              loader: 'css-loader?minimize'
            }
          ]
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "src", "assets"), /node_modules/]
      },
      {
       test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
       loader: 'url-loader',
       options: {
         limit: 100
       }
     },{
      test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      loader: 'file-loader'
     }
    ]
   },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: "vendor.js"
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks:true
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = module.exports.plugins || []

  // hjl: 该插件必须放在压缩之前，否则在js中变量会被替换，比如process.env.NODE_ENV变成t.env.NODE_ENV
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        DEBUG_ENV: JSON.stringify(process.env.DEBUG_ENV)
      }
    })
  ])
  let uglifyOpt = {}
  if(process.env.BABEL_ENV === 'ie8'){
    uglifyOpt = {
      supper_ie8: true,
      screw_ie8: false,
      compress: {
          properties: false,
          warnings: false
      },
      output: {
          beautify: true,
          quote_keys: true
      },
      mangle: {
          screw_ie8: false
      },
      sourceMap: false
    }

    const es3ifyPlugin = require('es3ify-webpack-plugin');
    module.exports.plugins = module.exports.plugins.concat([
      new es3ifyPlugin()
    ])
  }

  module.exports.plugins = module.exports.plugins.concat([
    new ParallelUglifyPlugin({
      uglifyJS: uglifyOpt
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'www','index.html'),
      template: path.join(__dirname, 'tpl_demo.html'),
      inject: true
    })
  ])

}else{
  module.exports.devtool = '#cheap-module-eval-source-map';

  // 代理请求
  module.exports.devServer = {
    inline: true,
    hot: true,
    proxy: [{
      path: '/api/*',
      target: 'http://127.0.0.1:3000',
      // hjl: 针对有些需要配host才能访问的地址
      // headers: {hosts: ''},
      secure: false
    }],
    historyApiFallback: true
  }
}