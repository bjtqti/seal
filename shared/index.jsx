import React from "react";
//import './style.css'
//import ReactDOM from "react-dom";

class Index extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	index:10
        }
        //console.log(props)
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(){
    	let {index} = this.state;
    	this.setState({
    		index:index+1
    	})
    }
    componentDidMount(){
    	this.timerID=setInterval(()=>{
    		this.updateIndex();
    		//console.log(this.timerID)
    	},3000)
    }
    componentWillUnmount() {
	    clearInterval(this.timerID);
	}
    render(){
    	//console.log(this.props)
 		let {list} = this.props.initialState;
        return (
        	<div onClick={this.updateIndex}>
        		<div>Hello world !{this.state.index}</div>
        		<ul>
        			{list.map((item,i)=><li key={i}>{item}</li>)}
        		</ul>
        	</div>
        )
    }
}

export default Index