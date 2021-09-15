import React, { Component } from 'react';

class ConditionalComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isActive: true
      };
    };
    
  render() {
    // some way to get dat with condition

    // using element variable
    // let message;
    // if(this.state.isActive == true){
    //     message = <div>I'm Active</div>
    // }
    // else{
    //     message = <div>I'm Inactive</div>
    // }
    // return (
    //     <h1>{message}</h1>
    // );

    //using if/else
    // if(this.state.isActive == true){
    //     return(
    //         <div>
    //             <h2>I'm Active now</h2>
    //         </div>
    //     );
    // }
    // else{
    //     return(
    //         <div>
    //             <h2>I'm Inactive now</h2>
    //         </div>
    //     );
    // }

    // using ternary operator
    //return this.state.isActive? (<div><h1>I'm active</h1></div>) : (<div><h1>I'm inactive</h1></div>);

    //using short-circuit operator
    return this.state.isActive && <div>I'm now Active</div>
  }
}

export default ConditionalComponent;
