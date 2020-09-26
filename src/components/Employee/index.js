import React from "react";

function Employee(props) {
    return (
        <table className="tableBlock">
            <thead>
                <tr>
                    <th></th>
                    <th onClick = {props.sortEmployees}>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {props.filteredEmployees.map(employee => (
                    
                    <tr  key={employee.login.uuid}>

                        <td><img src={employee.picture.medium} 
                                 alt={employee.name.first + " " + employee.name.last}>
                            </img>
                        </td>

                        <td>{employee.name.first + " " + employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td className="email"><a href={employee.email}>{employee.email}</a></td>
                        <td>{employee.location.city}</td>
                        <td>{employee.location.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Employee;