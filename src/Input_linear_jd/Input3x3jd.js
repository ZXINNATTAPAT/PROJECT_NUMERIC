import React, { useState } from "react"
import { PerformOperation } from "../Components_Linear/Test_Gaussjordan"

export default function Input3x3jd() {
    
    const [x11,setx11] = useState() 
    const [x12,setx12] = useState() 
    const [x13,setx13] = useState()

    const [xa,setxa] = useState() 

    const [x21,setx21] = useState() 
    const [x22,setx22] = useState()
    const [x23,setx23] = useState()

    const [xb,setxb] = useState() 

    const [x31,setx31] = useState() 
    const [x32,setx32] = useState()
    const [x33,setx33] = useState()
    
    const [xc,setxc] = useState() 

    const[ans_x,setansx] =useState()
    const[ans_y,setansy] =useState()
    const[ans_z,setansz] =useState()

    let Matrix =[[x11,x12,x13,xa],
                [x21,x22,x23,xb],
                [x31,x32,x33,xc]]

    console.log(Matrix)//follow value Matrix

    let calCarmer = (event) => {
        event.preventDefault()
        let ans_Matrix = PerformOperation(Matrix,3,0)
        setansx(ans_Matrix[0])
        setansy(ans_Matrix[1])
        setansz(ans_Matrix[2])
        console.log(ans_x)
        console.log(ans_y)
        console.log(ans_z)
        
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
                            <input type="number" className=" p-3 border border-3  border-dark" value={x11} onChange={(e)=> setx11(e.target.value)}/>
                        </div>
                        <div class="col">
                                <input type="number" className=" p-3 border border-3  border-dark" value={x12} onChange={(e)=> setx12(e.target.value)}/>
                        </div>
                        <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x13} onChange={(e)=> setx13(e.target.value)}/>
                        </div>
                        <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={xa} onChange={(e)=> setxa(e.target.value)}/>
                        </div>
                        </div><br />
                        <div class="row">
                       
                            <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x21} onChange={(e)=> setx21(e.target.value)}/>
                            </div>
                        <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x22} onChange={(e)=> setx22(e.target.value)}/>
                            </div>
                        <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x23} onChange={(e)=> setx23(e.target.value)}/>
                            </div>
                            <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={xb} onChange={(e)=> setxb(e.target.value)}/>
                            </div>
                        </div><br />
                        <div class="row">	
                            <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x31} onChange={(e)=> setx31(e.target.value)}/>
                            </div>
                        <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x32} onChange={(e)=> setx32(e.target.value)}/>
                            </div>
                        <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x33} onChange={(e)=> setx33(e.target.value)}/>
                            </div>
                            <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={xc} onChange={(e)=> setxc(e.target.value)}/>
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
                <div class="col"><h2>Z:{ans_z}</h2></div>
            </div>
               
      </div>
    )
  }

