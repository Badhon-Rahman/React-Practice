import React, {Component} from "react";

class NestedPage extends Component{
    render(){
        const {name, pageDef} = this.props;
        return <h4>{name} Page Defination: {pageDef}</h4>
    }
}

export default NestedPage;