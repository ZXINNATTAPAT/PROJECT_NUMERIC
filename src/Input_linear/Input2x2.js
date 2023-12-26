import React, { useState } from "react"
import { findSolution2x2 } from "../Components_Linear/Test_Cramer"


export default function Input2x2() {
    const [x00,setx00] = useState() 
    const [x01,setx01] = useState() 
    const [xa,setxa] = useState() 
    const [x10,setx10] = useState() 
    const [x11,setx11] = useState()
    const [xb,setxb] = useState() 


    const[ans_x,setansx] =useState()
    const[ans_y,setansy] =useState()

    let Matrix =[[x00,x01,xa],
                [x10,x11,xb]]

    console.log(Matrix)//follow value Matrix

    let calCarmer = (event) => {
        event.preventDefault()
        let ans_Matrix = findSolution2x2(Matrix)
        setansx(ans_Matrix[0])
        setansy(ans_Matrix[1])

    }
    return (
      <div className="">
        <form onSubmit ={calCarmer}>
            <div className="row">
                    <div className="col p-2 m-1">
                        <div className="form-group input_form_label">
                            <div class="container ">

                            <div class="row m-2">
                                    
                                    <input type="number" className="col p-2 m-1" placeholder="X 0 0" value={x00} onChange={(e)=> setx00(e.target.value)}/>
                                
                                    <input type="number" className="col p-2 m-1" placeholder="x 0 1" value={x01} onChange={(e)=> setx01(e.target.value)}/>
                            
                                    <input type="number" className="col p-2 m-1" placeholder="x a" value={xa} onChange={(e)=> setxa(e.target.value)}/>
                                
                            </div>

                            <div class="row m-2">	
                                
                                    <input type="number" className="col p-2 m-1" placeholder="x 1 0" value={x10} onChange={(e)=> setx10(e.target.value)}/>
                                
                                    <input type="number" className="col p-2 m-1" placeholder="x 1 1" value={x11} onChange={(e)=> setx11(e.target.value)}/>
                              
                                    <input type="number" className="col p-2 m-1" placeholder="x b" value={xb} onChange={(e)=> setxb(e.target.value)}/>
                            </div>

                        </div>
                            
                    </div>  
                </div>
            </div>
            <button type="submit" class="btn btn-primary col">Calculate</button>
        </form> <br/>
                <div class="row">
                  <h4>X: {ans_x}</h4>
                    <h4>Y: {ans_y}</h4>
                </div>
      </div>
    )
  }

