import React from "react";
import FragmentChild from "./FragmentChield";

function  FragmentParent() {
    return(
        <table>
            <tbody>
                <tr>
                    <FragmentChild />
                </tr>
            </tbody>
        </table>
    );
}

export default FragmentParent;
