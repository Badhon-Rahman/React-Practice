import React from "react";
import StyleModule from './StyleSheet.module.css';

function  StyleSheet(props) {
    //logically handle css style
    let classProperty = props.test ? 'test' : '';
    //inline styling object
    //variable should be named in camel case
    const inlineStyle = {
        fontSize: '50px',
        color: 'Green'
    }
    return(
        <div>
            <h2 className={classProperty}>Logically handle styling</h2>
            <p style={inlineStyle}>Inline Styling</p>
            <p className={`${StyleModule.error} font-xl`}>Style from Module.css</p>
        </div>
    );
}

export default StyleSheet;