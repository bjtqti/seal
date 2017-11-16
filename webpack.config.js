const path = require('path');
const webpack = require('webpack');
//const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_MODULES = path.resolve('node_modules');
//console.log(NODE_MODULES)

module.exports = {
	entry:{
		index:"./client/index/index.jsx",
		vendor:['axios','react','react-dom']
	},
	output:{
		path:path.resolve(__dirname,'client'),
		filename:"[name]/dist/[name].js",
		libraryTarget: "umd"
	},
	resolve:{
		 modules: [
	      "node_modules"
	    ],
		extensions:[".js",".jsx",".es6",'.styl']
	},
	target: "web", // enum
	module:{
		rules:[
			{
		        test: /\.(es6|jsx)$/,
		        loader: 'babel-loader',
		        exclude:[NODE_MODULES]
		    },
		    {
		    	test: /\.styl$/,
    			loader: 'style-loader!css-loader!stylus-loader'
		    },
		    {
		    	test:/\.(png|jpg|svg)$/,
		    	loader:'file-loader',
		    	options:{
		    		outputPath:'images/',
		    		//useRelativePath:true
		    	}
		    }
		]
	},
	plugins: [
	  new webpack.optimize.CommonsChunkPlugin({
	    name:'vendor',
	    filename:'vendor.js'
	  })
	]
}