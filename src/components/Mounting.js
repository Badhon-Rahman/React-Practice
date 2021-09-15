import React, { Component } from 'react';
import MountChild from './MountChild';

class Mounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:''
      };
      console.log("PConstructor");
    };

    static getDerivedStateFromProps(props, state){
        console.log('PgetDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('PCompontntDidMount');
    }

    shouldComponentUpdate(){
        console.log('PComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('PgetSnapShotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('PComponentDidUpdate');
    }
    
    updateState = () =>{
        this.setState({
            name:'Bolda'
        });
    }

    render() {
        console.log('PRender');
        return (
            <div> 
                <MountChild />
                <button onClick={this.updateState}>Update lifecycle</button>
            </div>

        );
    }
}

export default Mounting;
