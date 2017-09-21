var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		react: 'react',
		vendor: ['lodash'],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					},
				},
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['react', 'vendor']
			// name: ['react'],
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		}),
		new HtmlWebpackPlugin(),
		// new UglifyjsWebpackPlugin(),
	],
};
