import React from "react";

//any of them can use

// const DestructureProps = (props) =>{
//     const {name, info} = props;
//     return (
//         <div>
//             <h1>Name: {name}</h1>
//             <h4>Info: {info}</h4>
//         </div>
//     )
// }

const DestructureProps = ({name, info}) =>{
    return (
        <div>
            <h1>Name: {name}</h1>
            <h4>Info: {info}</h4>
        </div>
    )
}

export default DestructureProps;