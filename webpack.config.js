const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const PUBLIC_PATH = 'https://severinkaderli.com/';  // webpack needs the trailing slash for output.publicPath 

module.exports = {
	context: __dirname + "/src",
	mode: 'production',
	entry: "./assets/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "assets/bundle.js"
	},
	devServer: {
		open: true,
		contentBase: __dirname + "/src"
	},
	module: {
		rules: [{
			test: /\.(sass|scss)$/,
			use: [
				"style-loader",
				"css-loader",
				"sass-loader"
			]
		},
		{
			test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
			loader: "url-loader",
			query: {
				limit: 10000,
				name: "assets/fonts/[name].[hash:7].[ext]"
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
			inject: "body",
			hash: true,
			minify: {
				minifyCSS: true,
				minifyJS: true
			},
			filename: "index.html"
		}),
		new HtmlWebpackPlugin({
			template: "notes/index.html",
			inject: "body",
			hash: true,
			minify: {
				minifyCSS: true,
				minifyJS: true
			},
			filename: "notes/index.html"
		}),
		new SWPrecacheWebpackPlugin(
			{
				cacheId: 'severinkaderli.ch',
				dontCacheBustUrlsMatching: /\.\w{8}\./,
				filename: 'sw.js',
				minify: true,
				navigateFallback: PUBLIC_PATH + 'index.html',
				staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
			}
		)
	]
}