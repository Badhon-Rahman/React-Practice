import React from "react";

const Reusable = (props) =>{
    console.log(props);
    return (
        <div>
             <h4>Share {props.name} Page type: {props.heroName}</h4>
             {props.children}
        </div>
    )
}

export default Reusable;