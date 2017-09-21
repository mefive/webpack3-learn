var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		react: 'react',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
	],
};
