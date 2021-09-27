import React from "react";

function PersonView({person}) {
    if(person){
        return(
            <div>Name:{person.name}</div>
        );     
    }
    else{
        return (<h1>No Data Available</h1>);
    }
    
}
export default PersonView;