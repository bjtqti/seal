'use strict';

import ErrorApp from '../../shared/error.jsx';
import util from "../lib/util";

var errorHandler = function(err,req,res,next){
    console.log(err.stack,'***')
    const initialState = {
        code: "500",
        errorMsg:"啊噢~您访问的页面连接出错咯..."
    };
    const markup = util.getMarkupByComponent(ErrorApp ,{
        initialState
    });
    res.status(500)
    res.render('error', {
        markup: markup,
        initialState: initialState
    });
}

var notFoundHandler = function(req, res) {
    const initialState = {
        code: "404",
        errorMsg: "啊噢~您访问的页面不在地球上..."
    };
    const markup = util.getMarkupByComponent(ErrorApp ,{
        initialState
    });
    res.status(404)
    res.render('error', {
        markup: markup,
        initialState: initialState
    });
}

module.exports = {
    notFoundHandler: notFoundHandler,
    errorHandler: errorHandler
};