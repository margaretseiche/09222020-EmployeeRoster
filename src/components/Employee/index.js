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
                {props.employee.map(results => (
                    <tr className="tableRow" key={results.login.uuid}>
                        <td><img src={results.picture.medium} alt={results.name.first + " " + results.name.last}></img></td>
                        <td>{results.name.first + " " + results.name.last}</td>
                        <td>{results.phone}</td>
                        <td className="email"><a href={results.email}>{results.email}</a></td>
                        <td>{results.location.city}</td>
                        <td>{results.location.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Employee;