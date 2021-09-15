import React from 'react';
import Employee from './Employee';

function ListRenderByMap() {
    const employees = [
        {
            id: 1,
            name:'Radha',
            experties: 'React'
        },
        {
            id: 2,
            name:'Sadha',
            experties: 'Angular'
        },
        {
            id: 3,
            name:'Gadha',
            experties: 'Laravel'
        },
        {
            id: 4,
            name:'Hada',
            experties: 'NodeJs'
        }
    ];

    const employeeList = employees.map(em => (<Employee key={em.id} employee={em}/>))
    return <div> {employeeList}</div>
}
export default ListRenderByMap;