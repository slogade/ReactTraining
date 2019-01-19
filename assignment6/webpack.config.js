var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx',
    vendor: ['react', 'react-dom', 'react-redux', 'redux', 'reselect', 'react-router-dom', 'moment']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: './',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: "source-map",  // Enable sourcemaps for debugging webpack's output.
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]   // Add '.ts' and '.tsx' as resolvable extensions.
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html'
    })
  ]
};