import {React, Component} from "react";

class ClassEventHandler extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: "Initial Class Event"
        }
        //this.classEvent = this.classEvent.bind(this);
    }

    // classEvent() {
    //     this.setState({
    //         data: "Class Event clicked"
    //     });    
    // }

    classEvent = () => {
        this.setState({
            data:"Class Event Changed"
        });
    }
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>

                {/*Performance problem */}
                {/* <button onClick={this.classEvent.bind(this)}>ClassEvent</button> */}

                {/* Easiest way for bind event handler*/}
                {/* <button onClick={()=> this.classEvent()}>ClassEvent</button> */}

                {/*Raact official docs recommend to use*/}
                {/*bind this in constructor or bind through class*/}
                <button onClick={this.classEvent}>ClassEvent</button>
            </div>
        );
    }
}

export default ClassEventHandler;