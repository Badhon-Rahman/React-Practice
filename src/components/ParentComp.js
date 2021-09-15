import React, { Component } from 'react';
import PureComp from './PureComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Kathal Pata'
      };
    };

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Kathal Pata je khay se MIMI'
            });
        });
    }
    
  render() {
    return (
      <div> <PureComp /></div>
    );
  }
}

export default ParentComp;
