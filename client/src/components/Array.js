import React from 'react';
import Table from 'react-bootstrap/Table'

const Array = ({columnInfo}) => {
       
    if(columnInfo){
        var keys = Object.keys(columnInfo[0]);
        return(
        <Table responsive>
            <thead>
                <tr>
                    <th> "{keys[0]}" values </th>
                    <th>count</th>
                    <th>Average (age)</th>
                </tr>
            </thead>
            <tbody>
                {columnInfo.map(tr => (
                    <tr>
                        {keys.map( td => (
                            <td>{tr[td]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
        )
    }
    return null    
}
export default Array
