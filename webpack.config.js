const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				options: {
					presets: ["es2015", "stage-2", "react"]
				},
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		alias: {
			'react': 'anujs',
			'react-dom': 'anujs',
			// For compatibility with IE please use the following configuration
			// 'react': 'anujs/dist/ReactIE',
			// 'react-dom': 'anujs/dist/ReactIE',
			// 'redux': 'anujs/lib/ReduxIE', /// This is mainly for IE6-8, because of the poor performance of the isPlainObject method in the official source code.
			// If you reference prop-types or create-react-class
			// Need to add the following alias
			'prop-types': 'anujs/lib/ReactPropTypes',
			'create-react-class': 'anujs/lib/createClass',
			// If you use the onTouchTap event on the mobile side
			'react-tap-event-plugin': 'anujs/lib/injectTapEventPlugin',
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			template: 'src/index.ejs'
		})
	]
};