import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            coun: 0,
            counFive: 0,
            tempCount: 0
        }
    }
    changeCounOnece(){
        this.setState({
            coun: this.state.coun + 1
        });
    }

    changeCounFive(){
        this.setState((prevState)=>({
            counFive: prevState.counFive + 1
        }));
    }
    
    incrementFive(){
        this.changeCounFive();
        this.changeCounFive();
        this.changeCounFive();
        this.changeCounFive();
        this.changeCounFive();
    }

     
    render(){
        return(
            <div>
                <h1>Count 1: {this.state.coun}</h1>
                <h1>Count 5: {this.state.counFive}</h1>
                <button onClick={()=> this.changeCounOnece()}>Change by 1</button>
                <button onClick={()=> this.incrementFive()}>Change by 5</button>
            </div>
        )
    }
}

export default Counter;