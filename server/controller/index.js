'use strict';

import Index from '../../shared/index.jsx';
import util from "../lib/util";

var index = function(req,res,next){
	const initialState = {list:['苹果','桔子','香蕉']}
 	const markup = util.getMarkupByComponent(Index ,{
 		initialState
 	});
 
 	if(true){
 		res.render('home', {
	        markup: markup,
	        initialState: initialState
	    });
 	}else{
 		next(new Error('err.message'));
 	}
}

module.exports = {
	index:index
}