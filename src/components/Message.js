import React, { Component } from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: "first View"
        }
    }

    changeMessage(){
        this.setState({
            message: "final view"
        });
    }
    render(){
        const {message} = this.state;
        return (
            <div>
                <h1>State Message: {message}</h1>
                <button onClick={()=> this.changeMessage()}>Change State</button>
            </div>
        );
    }
}

export default Message;