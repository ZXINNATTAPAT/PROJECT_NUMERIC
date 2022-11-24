import React, { useState } from "react"
import { PerformOperation4x4 } from "../Components_Linear/Test_Gaussjordan"



export default function Input4x4jd() {
    
    const [x11,setx11] = useState() 
    const [x12,setx12] = useState() 
    const [x13,setx13] = useState()
    const [x14,setx14] = useState()

    const [xa,setxa] = useState() 

    const [x21,setx21] = useState() 
    const [x22,setx22] = useState()
    const [x23,setx23] = useState()
    const [x24,setx24] = useState()

    const [xb,setxb] = useState() 

    const [x31,setx31] = useState() 
    const [x32,setx32] = useState()
    const [x33,setx33] = useState()
    const [x34,setx34] = useState()

    const [xc,setxc] = useState() 

    const [x41,setx41] = useState() 
    const [x42,setx42] = useState()
    const [x43,setx43] = useState()
    const [x44,setx44] = useState()

    const [xd,setxd] = useState() 

    const[ans_x1,setansx1] =useState()
    const[ans_x2,setansx2] =useState()
    const[ans_x3,setansx3] =useState()
    const[ans_x4,setansx4] =useState()

    let Matrix =[[x11,x12,x13,x14,xa],
                [x21,x22,x23,x24,xb],
                [x31,x32,x33,x34,xc],
                [x41,x42,x43,x44,xd]]

    console.log(Matrix)//follow value Matrix

    let calCarmer = (event) => {
        event.preventDefault()
        let ans_Matrix = PerformOperation4x4(Matrix,4,0)
        setansx1(ans_Matrix[0])
        setansx2(ans_Matrix[1])
        setansx3(ans_Matrix[2])
        setansx4(ans_Matrix[3])
        console.log(ans_x1)
        console.log(ans_x2)
        console.log(ans_x3)
        console.log(ans_x4)
        
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
                            <input type="number" className=" p-3 border border-3  border-dark" value={x14} onChange={(e)=> setx14(e.target.value)}/>
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
                            <input type="number" className=" p-3 border border-3  border-dark" value={x24} onChange={(e)=> setx24(e.target.value)}/>
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
                            <input type="number" className=" p-3 border border-3  border-dark" value={x34} onChange={(e)=> setx34(e.target.value)}/>
                            </div>
                            <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={xc} onChange={(e)=> setxc(e.target.value)}/>
                            </div>
                        </div><br />
                        <div class="row">	
                            <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x41} onChange={(e)=> setx41(e.target.value)}/>
                            </div>
                        <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x42} onChange={(e)=> setx42(e.target.value)}/>
                            </div>
                        <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x43} onChange={(e)=> setx43(e.target.value)}/>
                            </div>
                        <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={x44} onChange={(e)=> setx44(e.target.value)}/>
                            </div>
                            <div class="col">
                            <input type="number" className=" p-3 border border-3  border-dark" value={xd} onChange={(e)=> setxd(e.target.value)}/>
                            </div>
                        </div><br />
                            <button type="submit" class="btn btn-primary border border-2 form-control w-35 p-3">
                            Calculate</button>
                        </div>
                    </div>  
                </div>
            </div>
        </form><br />
            
                <h5>X1:  {ans_x1}</h5>
                <h5>X2:  {ans_x2}</h5>
                <h5>x3:  {ans_x3}</h5>
                <h5>x4:  {ans_x4}</h5>
          
        
                
          
               
      </div>
    )
  }