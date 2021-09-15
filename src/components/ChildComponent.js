import React from 'react';

function ChildComponent(props) {
    return(
        <div>
            {/* <button onClick={props.parentHandler}>ChildClick</button> */}
            
            {/* passing params to parent*/}
            <button onClick={()=> props.parentHandler('child')}>ChildClick</button>
        </div>
    );
}

export default ChildComponent;