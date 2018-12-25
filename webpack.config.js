const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const TSConfigPaths = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const publicPath = '/';
const basePath = __dirname;
const SRC = path.join(basePath, 'src');
const DIST = path.join(basePath, 'dist');

const devServer = {
  //proxy: { // proxy URLs to backend development server //'/api': 'http://localhost:3000' },
  hot: false,
  port: 80,
  noInfo: false,
  contentBase: path.join(basePath, 'dist'), //Content base
  inline: true, //Enable watch and live reload
  //host: 'localhost',
  historyApiFallback: true
};

const baseConfig = {
  context: __dirname, //SRC

  entry: {
    'index': path.resolve(basePath, "src/index.tsx") 
    //'app': path.join(basePath, 'src/app.tsx'),
  },
  output: {
    path: DIST,
    filename: '[name].js',
    publicPath: "/"
    //library: '[name]',
    //libraryTarget: 'umd',
    //
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx' ],
    plugins: [
      new TSConfigPaths(), //{ configFile: path.join(__dirname, './tsconfig.json')}),
    ],
    //alias
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        //exclude: /node_modules/,
        use: [ { loader: 'ts-loader', } ] //options: { transpileOnly: true } 
      },
      
      { enforce: 'pre', test: /\.jsx?$/, loader: 'source-map-loader' },
    ],
  },


  // For development https://webpack.js.org/configuration/devtool/#for-development
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      //template: path.resolve(basePath, './assets/index.html') //Name of template in ./src
    }),
     
  ],

  //target: "web",
  devtool: "source-map",
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  //node: { fs: "empty" },
  mode: "development",
  watch: true,
  watchOptions: { 
    aggregateTimeout: 2000,
    ignored: ['dist/**/*.*', 'node_modules', ]
   },

   devServer
};
module.exports = () => {
  const config = { ... baseConfig };
  if (process.env["DEVSERVER"]){

  }
  //config["devServer"] = devServer;
  //config.plugins.push(webext);
  return config;
};