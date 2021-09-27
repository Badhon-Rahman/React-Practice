import React from "react";

const higherOrderParent = (OriginalComponent, incrementParam) => {
    class NewComponent  extends React.Component{
        constructor(props) {
            super(props)
            
            this.state = {
                count: 0
            };
        };
    
        counHover = () => {
            this.setState((prevState) => {
                return { count: prevState.count + incrementParam } 
            });
        }
        render(){
            return <OriginalComponent count={this.state.count} counHover={this.counHover} {...this.props}/>
        }
    }
    return NewComponent
}
export default higherOrderParent;