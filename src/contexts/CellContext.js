import React, { createContext, useState } from 'react';

export const CellContext = createContext();

export const CellProvider = (props) => {

    // Cell holds information pertaining to the cell clicked on the heat map. Its value determines how many posts need to be 
    // generated in the Posts section. 
    // cell is an array with 3 values. cell[0] is row of the heat map. cell[1] is column of the heat map. cell[2] is the value in the cell. 
    // ie. the number of posts at that specific timeslot.

    const [cell, setCell] = useState([]);

    return (

        <CellContext.Provider value={[cell, setCell]} >

            {props.children} 

        </CellContext.Provider>
    )
}