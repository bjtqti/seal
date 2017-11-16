'use strict';

var express = require('express');
var router = express.Router();

require('babel-register')
 
var hostName = require("./lib/config").hostName
var mainController = require("./controller/main");

router.get("/",require("./controller/index").index);
router.all("*", mainController.notFoundHandler);

module.exports = router;
