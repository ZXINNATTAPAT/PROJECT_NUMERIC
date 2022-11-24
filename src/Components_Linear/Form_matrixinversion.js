import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Input3x3Inversion from '../Input_linear_Inversion/Input3x3Inversion';


export default function Formmatrixinversion()
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
          case 'INPUT3X3':
            return(<Input3x3Inversion/>)
          default:
            return null
        }
      })()}
      </center>  
        
      
    </div>

  );
}