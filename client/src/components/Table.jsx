import React from "react";

function Table({Tdata}) {

    if(Tdata.length === 0) return null;

    const dataTable = Tdata.map( data => {
        return(
            <tr>
                <td>{data.name}</td>
                <td>{data.price}</td>
            </tr>
        );
    });

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Stock name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {dataTable}
                </tbody>
            </table>
        </div>
    );
}

export default Table;