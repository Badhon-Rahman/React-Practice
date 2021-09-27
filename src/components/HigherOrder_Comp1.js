import React, { Component } from 'react';
import higherOrderParent from './higherOrderParent'

class HigherOrder_Comp1 extends Component {

  render() {
      const {count, counHover} = this.props;
    return (
      <div> 
        <h1 onMouseOver={counHover}>{this.props.name} Hover {count} times</h1>    
      </div>
    );
  }
}

export default higherOrderParent(HigherOrder_Comp1, 1500);
