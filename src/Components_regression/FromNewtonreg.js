import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react"
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    
  } from 'recharts';
import { findregression, findsum } from '../Input_regression/TestNewtonreg';

export default function FromNewtonRegression() {
    
    const [x11,setx11] = useState() 
    const [x12,setx12] = useState() 
    const [x13,setx13] = useState()
    const [x14,setx14] = useState()
    const [x15,setx15] = useState()

    const [y21,sety21] = useState() 
    const [y22,sety22] = useState()
    const [y23,sety23] = useState()
    const [y24,sety24] = useState()
    const [y25,sety25] = useState()

    const[value,setvalue]=useState()

    // const[ans1,setan1]=useState()
    // const[ans2,setan2]=useState()
    // const[ans3,setan3]=useState()
    // const[ans4,setan4]=useState()
    // const[ans5,setan5]=useState()

    const[ans6,setan6]=useState()
    
    
    const[ansa,setana]=useState()
    const[ansb,setanb]=useState()

    let x =[x11,x12,x13,x14,x15];
    let xc =[0,x11,x12,x13,x14,x15];
    // console.log(x)
    let y = [y21,y22,y23,y24,y25];
    // console.log(y)
    
    let formularchart =[]
    let anschartScatter =[]
    let zx = []
    for(let i=0 ; i<6 ;i++){
        zx = ansa + (ansb * xc[i])
        formularchart.push({x:xc[i],y:zx})
    }
    
                    
    for(let i=0 ; i<5;i ++){
        anschartScatter.push({x:x[i],y:y[i]});
    }

    let calxc = (event) => {
        event.preventDefault()
        let ans=[] ;
        let val =value
        let findval ;
        console.log(val)
        ans = findsum(x,y);
        // setan1(ans[0])//sumx
        // setan2(ans[1])//sumy
        // setan3(ans[2])//sumxy
        // setan4(ans[3])//sumxx
        // setan5(ans[4])//sumyy
        let ans_resgession =[]
        ans_resgession = findregression(ans)
        setana(ans_resgession[0])
        setanb(ans_resgession[1])
        findval = ( ans_resgession[0] + (ans_resgession[1]*value));
       
        setan6(findval)
        console.log(ans);
        
        
    }
    return (
            <div >
                <br />
                <form onSubmit ={calxc}>
                    <center>
                    <div className='row'>
                    <div className='col'> 
                        <label>X</label>
                            <div className='mb-3 row g-3 w-75'>
                                
                                    <input type="number" className=" p-2 border border-2  border-dark
                                    form-control w-45 " 
                                        step={0.001} value={x11}  onChange={(e)=> setx11(e.target.value)}/>
                                    
                                    <input type="number" className=" p-2 border border-2  border-dark
                                    form-control w-45 " 
                                            step={0.001}    value={x12} onChange={(e)=> setx12(e.target.value)}/>
                                    
                                    <input type="number" className=" p-2 border border-2  border-dark
                                    form-control w-45 " 
                                        step={0.001}   value={x13} onChange={(e)=> setx13(e.target.value)}/>
                                    
                                    <input type="number" className=" p-2 border border-2 border-dark
                                    form-control w-45 " 
                                        step={0.001}  value={x14} onChange={(e)=> setx14(e.target.value)}/>

                                    <input type="number" className=" p-2 border border-2 border-dark
                                    form-control w-45 " 
                                        step={0.001}  value={x15} onChange={(e)=> setx15(e.target.value)}/>
                                    
                                    <input type="number" className=" p-2 
                                        border border-4  border-success form-control w-45  " placeholder='value'
                                        step={0.1}    value={value} onChange={(e)=> setvalue(e.target.value)}/>
                                </div>   
                    </div>
                    <div className='col'>
                        <label>Y</label>
                        <div className='mb-3 row g-3 w-75'>
                                
                                <input type="number" className=" p-2 border border-2 border-dark
                                form-control w-45 " 
                                        step={0.1}    value={y21} onChange={(e)=> sety21(e.target.value)}/>
                                            
                                <input type="number" className=" p-2 border border-2 border-dark
                                form-control w-45 " 
                                        step={0.1}    value={y22} onChange={(e)=> sety22(e.target.value)}/>
                                        
                                <input type="number" className=" p-2 border border-2  border-dark
                                form-control w-45 " 
                                        step={0.1}    value={y23} onChange={(e)=> sety23(e.target.value)}/>
                                        
                                <input type="number" className=" p-2 border border-2  border-dark
                                form-control w-45 " 
                                        step={0.1}    value={y24} onChange={(e)=> sety24(e.target.value)}/>

                                <input type="number" className=" p-2 border border-2  border-dark
                                form-control w-45 " 
                                        step={0.1}    value={y25} onChange={(e)=> sety25(e.target.value)}/>
                                        
                                <button type="submit" class="btn btn-success
                                            border border-4  form-control  p-2">
                                            Calculate</button>
                            </div>
                    </div>
                    <div className='col '>
                    <ScatterChart
                        width={500}
                        height={400}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                        >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="x" />
                        <YAxis type="number" dataKey="y" name="y" />
                        <Tooltip cursor={{ strokeDasharray: '2 2' }} />
                        <Legend />
                        <Scatter name="polt x y" data={anschartScatter} fill="#8884d8" />
                        <Scatter name="lines" data={formularchart} fill="#82ca9d" line shape="" />
                        </ScatterChart>
                    </div>

                    </div>
                  </center>
                       
                </form><br />  
                            <center>
                                {/* <div className='mb-3 row g-3 w-75 '>
                                                <table class="table border border-3  border-dark "  >
                                                    <thead>
                                                        <tr>
                                                            <th > <center>X</center> </th>
                                                            <th > <center>Y</center> </th>
                                                            <th > <center>round1</center> </th>
                                                            <th > <center>round2</center> </th>
                                                            <th > <center>round3</center> </th>
                                                        </tr>
                                                    </thead>
                                                        <tbody>
                                                            {datatable.map((val, key) => {
                                                            return (
                                                                <tr  key={key}>
                                                                    <td ><center>{val.x}</center></td>
                                                                    <td ><center>{val.y}</center></td>
                                                                    <td ><center>{val.round1}</center></td>
                                                                    <td ><center>{val.round2}</center></td>
                                                                    <td ><center>{val.round3}</center></td>
                                                                </tr>
                                                            )})}
                                                        </tbody>
                                                </table>
                                            </div> */}
                                <h5>eqution is y' = {ansa} + {ansb}X 
                                <br />Value of {value} is : {ans6}</h5>
                </center>

            </div>
    )
  };