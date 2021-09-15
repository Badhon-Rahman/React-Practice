import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName:"Father"
        };
        
        this.parentInfo = this.parentInfo.bind(this);
    };

    parentInfo(childName){
        alert(`This is ${this.state.parentName} from ${childName}`);
    }

  render() {
    return (
      <div>
          <h2>In Parent:</h2>
          <ChildComponent parentHandler={this.parentInfo}/>
      </div>
    );
  }
}

export default ParentComponent;
