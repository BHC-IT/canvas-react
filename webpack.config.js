const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		mainFields: ['main', 'module', 'browser'],
	},
	devtool: 'source-map',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(svg)$/,
				type: 'asset/inline',
			},
			{
				test: /\.(ttf)$/,
				type: 'asset/inline',
				//loader: 'url-loader?limit=100000'
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		compress: true,
		hot: true,
		port: 4000,
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
};