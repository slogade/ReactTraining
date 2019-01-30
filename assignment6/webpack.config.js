var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.tsx',
		vendor: ['react', 'react-dom', 'react-redux', 'redux', 'reselect', 'react-router-dom', 'moment', 'react-datepicker']
	},
	output: {
		path: __dirname + './dist',
		publicPath: '/',
		filename: '[name].js'
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: true
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'dist/index.html'
		})
	]
};