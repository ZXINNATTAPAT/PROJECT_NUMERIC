import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Input2x2 from '../Input_linear/Input2x2';
import Input3x3 from '../Input_linear/Input3x3';
import Input4x4 from '../Input_linear/Input4x4';
import Input5x5 from '../Input_linear/Input5x5';


export default function FormCramer()
{
  const [inputState, setinputState] = useState("");
  return (
    <div className="App">
       <select className="form-select form-select " value={inputState} onChange={(e) => {
          const selectedinput = e.target.value;
          setinputState(selectedinput);
        }}>
        <option>Please select a matrix.</option>
        <option value="INPUT2X2">INPUT2X2</option>
        <option value="INPUT3X3">INPUT3X3</option>
        <option value="INPUT4X4">INPUT4X4</option>
        <option value="INPUT5x5">INPUT5x5</option>
      </select>
      {(() => {
        switch (inputState) {
          case 'INPUT2X2':
            return(<Input2x2/>)
          case 'INPUT3X3':
            return(<Input3x3/>)
          case 'INPUT4X4':
            return(<Input4x4/>)
          case 'INPUT5x5':
            return(<Input5x5/>)
          default:
            return null
        }
      })()}
      
        
      
    </div>

  );
}


