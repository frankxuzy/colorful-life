// const path = require('path')

// module.exports = {
//   entry: path.join(__dirname, 'index.js'),
//   output: {
//     path: path.join(__dirname, '../server/public'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       test: /\.jsx?$/,
//       loader: 'babel-loader',
//       exclude: /node_modules/
//     }]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devtool: 'source-map'
// }

const path = require('path')

module.exports = {
  mode: 'production', // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: path.join(__dirname, 'index.js'), // string | object | array  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.join(__dirname, '../server/public'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'bundle.js' // string    // the filename template for entry chunks
    // publicPath: "/assets/", // string    // the url to the output directory resolved relative to the HTML page
    // library: "MyLibrary", // string,
    // the name of the exported library
    // libraryTarget: "umd", // universal module definition    // the type of the exported library
    /* Advanced output configuration (click to show) */ },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        // include: [
        //   path.resolve(__dirname, "app")
        // ],
        exclude: [
          /node_modules/
        ],
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include
        // issuer: { test, include, exclude },
        // conditions for the issuer (the origin of the import)
        // enforce: "pre",
        // enforce: "post",
        // flags to apply these rules, even if they are overridden (advanced option)
        loader: 'babel-loader',
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide
        options: {
          presets: ['es2015']
        }
        // options for the loader
      }
      // matches if the condition is not matched
    ],
    resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
      modules: [
        'node_modules',
        path.resolve(__dirname, 'app')
      ],
      // directories where to look for modules
      extensions: ['.js', '.json', '.jsx', '.css']
    // extensions that are used
    /* alternative alias syntax (click to show) */
    /* Advanced resolve configuration (click to show) */ },
    devtool: 'source-map' // enum  // enhance debugging by adding meta info for the browser devtools
  /* Advanced configuration (click to show) */}
}
