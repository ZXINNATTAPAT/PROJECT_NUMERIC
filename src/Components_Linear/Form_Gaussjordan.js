import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Input2x2jd from '../Input_linear_jd/Input2x2jd';
import Input3x3jd from '../Input_linear_jd/Input3x3jd';
import Input4x4jd from '../Input_linear_jd/Input4x4jd';
import Input5x5jd from '../Input_linear_jd/Input5x5';



export default function Form_Gaussjordan()
{
  
  const [inputState, setinputState] = useState("");
  
  return (
    <div className="App">
      <center>
       <select className="form-select form-select-lg mb-3 w-25" value={inputState} onChange={(e) => {
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
            return(<Input2x2jd/>)
          case 'INPUT3X3':
            return(<Input3x3jd/>)
          case 'INPUT4X4':
            return(<Input4x4jd/>)
          case 'INPUT5x5':
            return(<Input5x5jd/>)
          default:
            return null
        }
      })()}
      </center>  
        
      
    </div>

  );
}