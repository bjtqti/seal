import React from "react";
import { createStore } from 'redux';


function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

let store = createStore(counter);

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
        
        store.dispatch({ type: 'INCREMENT' });
    	let {index} = this.state;
    	this.setState({
    		index:index+1
    	})
    }
    componentDidMount(){
        store.subscribe(() =>
          console.log(store.getState())
        );
    	// this.timerID=setInterval(()=>{
    	// 	this.updateIndex();
    	// 	//console.log(this.timerID)
    	// },3000)
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
        			{list.map((item,i)=><li key={i}>{item.title}</li>)}
        		</ul>
        	</div>
        )
    }
}

export default Index