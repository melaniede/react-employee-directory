import React from "react";

function EmployeeRow (props) {
    return (
        <table>
            <tbody>
                <tr>
                    <th><img src={props.image}/></th>
                    <th>{props.name}</th>
                    <th>{props.email}</th>
                    <th>{props.phone}</th>
                </tr>
            </tbody>
        </table>
    );
}

export default EmployeeRow;
