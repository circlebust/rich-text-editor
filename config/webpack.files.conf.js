
const files = {
    images: {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'assets/img/[name].[ext]?[hash]'
      }
    },
    files: {
  
    // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            // This loader doesn't use a "test" so it will catch all modules
            // that fall through the other loaders.
            
              // Exclude `js` files to keep "css" loader working as it injects
              // its runtime that would otherwise processed through "file" loader.
              // Also exclude `html` and `json` extensions so they get processed
              // by webpacks internal loaders.
              exclude: [/\.(js|jsx|mjs|ts|tsx)$/, /\.html$/, /\.json$/],
              use: [ { loader: 'file-loader', options: { name: 'static/media/[name].[hash:8].[ext]' } }],
              },
  }
  //module.exports = { ...devReact };
  

  
  // For development https://webpack.js.org/configuration/devtool/#for-development
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      //template: path.resolve(basePath, './assets/index.html') //Name of template in ./src
    }),
    
    /*new CopyWebpackPlugin([
      { from: path.resolve(basePath, "src/assets/html/"), to: path.resolve(basePath, "dist"), force: true } //[name].[ext]
    ], { debug: 'info', copyUnmodified: true, context: basePath }),
    *///Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    /*new HtmlWebpackPlugin({
      filename: 'dist/panel.html', //Name of file in ./dist/
      template: 'src/assets/panel.html', //Name of template in ./src
      hash: false,
    }),*/
    //new CopyWebpackPlugin(['src/assets/*', 'src/assets/*.html', 'src/assets/manifest.json' ]),
    /*new WebExtWebpackPlugin({
      //browserConsole: true,
      startUrl: ['about:debugging'], //['__tests__/playground.html'],
      firefox: "C:/Program Files/Firefox Developer Edition/firefox.exe",
      sourceDir: DIST,
    })*/
  ],