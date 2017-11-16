'use strict'
 
var config = {
    hostName:'http://localhost'
};

var runtime = process.env["NODE_ENV"];

config["runtime"] = runtime;

if (runtime === "develop") {
    
}

if(runtime === "test"){
     
}
 
if(runtime === "production"){
    
}
 
module.exports = config;