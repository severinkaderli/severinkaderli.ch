const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: __dirname + "/src",
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
			hash: true
		})
	]
}