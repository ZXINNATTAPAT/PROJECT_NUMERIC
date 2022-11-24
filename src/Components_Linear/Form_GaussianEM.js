import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Input2x2EM from '../Input_liner_EM/Input2x2EM';
import Input4x4EM from '../Input_liner_EM/Input4x4EM';
import Input3x3EM from '../Input_liner_EM/Input3x3EM';
import Input5x5EM from '../Input_liner_EM/Input5x5EM';

export default function FormGaussEM()
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
            return(<Input2x2EM/>)
          case 'INPUT3X3':
            return(<Input3x3EM/>)
          case 'INPUT4X4':
            return(<Input4x4EM/>)
          case 'INPUT5x5':
            return(<Input5x5EM/>)
          default:
            return null
        }
      })()}
      </center>  
        
      
    </div>

  );
}