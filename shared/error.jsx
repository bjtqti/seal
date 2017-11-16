import React from "react";
//import './style.css'
//import ReactDOM from "react-dom";

class ErrorApp extends React.Component {
	constructor(props) {
        super(props);
    }
    
    render(){
    	//console.log(this.props)
 		let {errorMsg} = this.props.initialState;
        return (
        	<div>
        		<div>{errorMsg}</div>
        	</div>
        )
    }
}

export default ErrorApp