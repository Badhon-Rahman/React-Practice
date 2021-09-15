import React from "react";

// function FirstPage(){
//     return <h1>React Pages</h1>
// }

const FirstPage = () => {
    return React.createElement(
        'div',
        {id: 'header', className: 'pageHeader'},
        React.createElement('h1', null, 'Page Headings')
        );
}
export default FirstPage;