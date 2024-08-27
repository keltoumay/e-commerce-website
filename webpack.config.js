const path = require('path');

module.exports = {
  // Other Webpack configuration options
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    // Replace deprecated options with setupMiddlewares
    setupMiddlewares: (middlewares, devServer) => {
      // Example of adding custom middleware
      middlewares.push((req, res, next) => {
        // Custom middleware logic
        next();
      });

      // Add your custom setup for before and after middlewares here
      // Example of existing middlewares that were previously onBeforeSetupMiddleware and onAfterSetupMiddleware
      devServer.app.use((req, res, next) => {
        // Custom before setup logic
        next();
      });

      devServer.app.use((req, res, next) => {
        // Custom after setup logic
        next();
      });

      return middlewares;
    },
  },
};
