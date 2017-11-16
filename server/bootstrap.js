
var path = require('path');
var express = require('express');
var router = require('./router.js');
var app = new express();
var swig = require('swig');

app.use('/client', express.static('client'));
app.set('views', './views'); // 指定视图所在的位置
app.set('view engine', 'html'); // 注册模板引擎
app.engine('html', swig.renderFile);

app.use(router);
app.use(require('./controller/main.js').errorHandler)

module.exports = app;