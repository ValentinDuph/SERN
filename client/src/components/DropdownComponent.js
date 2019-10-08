import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownComponent = ({selectedColumn, columns, selectColumn}) => {
    var display = "Choose column";
    if(selectedColumn) display = selectedColumn;
    return(
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                { display }
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                {columns.map(columns => (
                    <Dropdown.Item onClick={() => selectColumn(columns)} key={columns}>{columns}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownComponent

