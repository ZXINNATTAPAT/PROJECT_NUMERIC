import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { applyFormula } from '../Interpolation/TestNewton';


export default function FormNewtonInter()
{
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");

    const [items2, setItems2] = useState([]);
    const [itemName2, setItemName2] = useState("");

    const [value,setvalue] = useState(0);
    const [ansers,setansers] = useState(0);
   
    let ans ;
    let setiter = 0;
    

    const addItem = event => {
      event.preventDefault();
      setItems([
        ...items,
        {
          id: items.length,
          name: itemName
        }
        
      ]);
      setItems2([
        ...items2,
        {
          id2: items2.length,
          name: itemName2
        }
      ])
    setiter++;
     console.log(items)
     console.log(items2)
      setItemName("");
      setItemName2("");
    };

    let cal=()=>{
      ans =applyFormula(value,items,items2,setiter)
      console.log(ans);
      setansers(ans)
    };
  
    return (
      <>
        <form onSubmit={addItem}>
          
          <div className='mb-3 row g-3'>
            <div className='col'>
                <label>X</label>
                <input
                class="form-control p-3"
                name="item"
                type="number"
                value={itemName}
                onChange={e => setItemName(e.target.value)}
                />
            </div>
            <div className='col'>
                <label>Y</label>
                <input
                class="form-control p-3"
                name="item2"
                type="number"
                value={itemName2}
                onChange={e => setItemName2(e.target.value)}
                />
            </div>
          </div> 
            <div className='mb-3 row g-3'>
              <div className='col'>
                <label>value</label>
                    <input
                    class="form-control p-3"
                    type="number"
                    value={value}
                    onChange={e => setvalue(e.target.value)}
                    />
                    </div>
            </div>
            <div className='mb-3 row g-3'>
                <div className='col'>
                      <button type='Submit'
                      class="btn btn-primary border border-2 
                      form-control  p-3">
                          Set</button>
                </div>  
                <div className='col'>
                    <button type="button" 
                    class="btn btn-primary border border-2 
                    form-control  p-3" onClick={cal}>
                        Calculate</button>
                </div>
            </div>
        </form>
                    <div className='mb-3 row g-3'>
                     <div>
                      <h3> value : {ansers}</h3>
                     </div>
									<div className='col'>
										<div className='overflow-auto'style={{height: '300px'}}>
                           <div className='mb-3 row g-3'>
                           <div className='col '>
                          <table class="table table-dark"  >                      
                            <thead>
                              <tr>
                                <th > <center>X</center> </th>
                              </tr>
                            </thead>
                              <tbody>
                                  {items.map(items => {
                                  return(
                                    <tr  key={items}>
                                      <td ><center>{items.name}</center></td>
                                    </tr>
                                  )})}     
                              </tbody>
                                   </table>
                                   </div>
                           <div className='col '>
                          <table class="table table-dark"  >                      
                            <thead>
                              <tr>
                                <th > <center>Y</center> </th>
                              </tr>
                            </thead>
                              <tbody>
                                  {items2.map(items2 => {
                                  return(
                                    <tr  key={items2}>
                                      <td ><center>{items2.name}</center></td>
                                    </tr>
                                  )})}     
                              </tbody>
                                   </table>
                                   </div>
                                     
                        </div>
										</div>
								</div>
       </div>
      </>
    );
  }
  