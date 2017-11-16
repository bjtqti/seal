'use strict';
import React from "react";
import ReactDOMServer from 'react-dom/server';

var util = {
 
    getMarkupByComponent: function(RenderComponent,props = {}) {
        return ReactDOMServer.renderToString(<RenderComponent {...props} />);
    }
}

module.exports = util;
