import React from "react";

function Employee({employee}) {
    return(
        <h1>Id:{employee.id}, Name:{employee.name}, Experties:{employee.experties}</h1>
    );
}
export default Employee;