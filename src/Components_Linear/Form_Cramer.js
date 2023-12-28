import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Input2x2 from '../Input_linear/Input2x2';
import Input3x3 from '../Input_linear/Input3x3';
import Input4x4 from '../Input_linear/Input4x4';
import Input5x5 from '../Input_linear/Input5x5';


export default function FormCramer() {
  const [inputState, setinputState] = useState("");
  return (
    <div className="App">
      <div className='col-sm-3'>
        <select className="form-select  form-control p-2" value={inputState} onChange={(e) => {
          const selectedinput = e.target.value;
          setinputState(selectedinput);
        }}>
          <option className='form-control'>Please select a matrix.</option>
          <option className='form-control' value="2X2"><p>2 X 2</p></option>
          <option className='form-control' value="3X3"><p>3 X 3</p></option>
          <option className='form-control' value="4X4"><p>4 X 4</p></option>
          <option className='form-control' value="5x5"><p>5 x 5</p></option>
        </select>
      </div>
      {(() => {
        switch (inputState) {
          case '2X2':
            return (<Input2x2 />)
          case '3X3':
            return (<Input3x3 />)
          case '4X4':
            return (<Input4x4 />)
          case '5x5':
            return (<Input5x5 />)
          default:
            return null
        }
      })()}



    </div>

  );
}


