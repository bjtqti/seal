'use strict';
import axios from 'axios';
import Index from '../../shared/index.jsx';
import util from "../lib/util";

var index = function(req,res,next){
 	axios.get('https://shop.hnmall.com/oto/category-ajax.html').then((rs)=>{
 		//console.log(rs.data)
 		if(rs.data){
	 		let initialState = rs.data
	 		const markup = util.getMarkupByComponent(Index ,{
		 		initialState
		 	});
	 		res.render('home', {
		        markup: markup,
		        initialState: initialState
		    });
	 	}else{
	 		next(new Error('err.message'));
	 	}
 	}).catch(function (error) {
	    next(new Error(error));
	});
}

module.exports = {
	index:index
}