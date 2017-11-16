'use strict';
import React from "react";
import ReactDOM from "react-dom";
import IndexApp from '../../shared/index.jsx';
import "../common/responsive.js"
import './index.styl'
 
function bootstrap(){
    var initialState = JSON.parse(document.getElementById("initial").textContent);
    ReactDOM.hydrate(<IndexApp initialState={initialState} />,document.getElementById('app'));
}

if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}