const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_MODULES = path.resolve('node_modules');

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
		extensions:[".js",".jsx",".styl"]
	},
	//target: "web", // enum
	module:{
		rules:[
			{
		        test: /\.(js|jsx)$/,
		        loader: 'babel-loader',
		        exclude:[NODE_MODULES]
		    },
		    {
		    	test:/\.styl$/,
		    	use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader!stylus-loader"
		        })
		    },
		    {
		    	test:/\.(png|jpg)$/,
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
	  }),
	  new ExtractTextPlugin({
	    filename: '[name]/dist/[name].css',
	    allChunks: true,
	  }),
	  new webpack.DefinePlugin({
	    'process.env.NODE_ENV': '"production"',
	  })
	]
}