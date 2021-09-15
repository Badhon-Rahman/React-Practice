import React, { Component } from 'react';

class MountChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:''
      };
      console.log("CConstructor");
    };

    static getDerivedStateFromProps(props, state){
        console.log('CgetDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
        console.log('CCompontntDidMount');
    }
    shouldComponentUpdate(){
        console.log('CComponentUpadte');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('CgetSnapShotBeforeUpdate');
    }
    componentDidUpdate(){
        console.log('CComponentDidUpdate');
    }
    
    render() {
        console.log('CRender');
        return (
        <div>PRender</div>
        );
    }
}

export default MountChild;
