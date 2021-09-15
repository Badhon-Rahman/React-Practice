import React from "react";

function FunctionEventHandler(){
    function eventFunction(){
        console.log("clicked");
    }
    return (
        <div>
            <button onClick={eventFunction}>FuncEvent</button>
        </div>
    );
}

export default FunctionEventHandler;