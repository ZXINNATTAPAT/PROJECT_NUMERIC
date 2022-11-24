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
      <div className="Lost">
        
        <form onSubmit ={calCarmer}>
            <div className="row">
                    <div className="col">
                        <div className="form-group input_form_label">
                    <div class="container form-group input_form_label">
                        <div class="row">
                            <div class="col">
                            <input type="number" className="w-25 p-3 border border-3  border-dark" value={x00} onChange={(e)=> setx00(e.target.value)}/>
                        </div>
                        <div class="col">
                                <input type="number" className="w-25 p-3 border border-3  border-dark" value={x01} onChange={(e)=> setx01(e.target.value)}/>
                        </div>
                        <div class="col">
                            <input type="number" className="w-25 p-3 border border-3  border-dark" value={xa} onChange={(e)=> setxa(e.target.value)}/>
                        </div>
                        </div><br />
                        <div class="row">	
                            <div class="col">
                            <input type="number" className="w-25 p-3 border border-3  border-dark" value={x10} onChange={(e)=> setx10(e.target.value)}/>
                            </div>
                        <div class="col">
                            <input type="number" className="w-25 p-3 border border-3  border-dark" value={x11} onChange={(e)=> setx11(e.target.value)}/>
                            </div>
                            <div class="col">
                            <input type="number" className="w-25 p-3 border border-3  border-dark" value={xb} onChange={(e)=> setxb(e.target.value)}/>
                            </div>
                        </div><br />
                            <button type="submit" class="btn btn-primary border border-2 form-control w-35 p-3">
                            Calculate</button>
                        </div>
                    </div>  
                </div>
            </div>
        </form><br />
                <div class="row">
                    <div class="col"><h2>X:{ans_x}</h2></div>
                    <div class="col"><h2>Y:{ans_y}</h2></div>
                </div>
      </div>
    )
  }

