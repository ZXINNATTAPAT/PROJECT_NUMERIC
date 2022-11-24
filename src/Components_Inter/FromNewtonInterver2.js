import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react"
import { findvalue } from '../Interpolation/TestNewton';
import * as math from 'mathjs';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
  } from "recharts";

export default function FromNewtonInterv2() {
    
    const [x11,setx11] = useState() 
    const [x12,setx12] = useState() 
    const [x13,setx13] = useState()
    const [x14,setx14] = useState()

    const [y21,sety21] = useState() 
    const [y22,sety22] = useState()
    const [y23,sety23] = useState()
    const [y24,sety24] = useState()

    const[value,setvalue]=useState()
    const[ans1,setan1]=useState()
    const[ans2,setan2]=useState()
    const[ans3,setan3]=useState()
    const[ans4,setan4]=useState()
    const[ans5,setan5]=useState()
    const[ans6,setan6]=useState()
    const[ans7,setan7]=useState()

   
    let x =[x11,x12,x13,x14];
    console.log(x)
    let y = [y21,y22,y23,y24];
    console.log(y)
    let anschart =[{x:x[0],y:y[0]},
                    {x:x[1],y:y[1]},
                    {x:x[2],y:y[2]},
                    {x:x[3],y:y[3]},]
                    
    let datatable=[{x:x11, y:y21, round1:"", round2:"", round3:""},

                {x:"", y:"", round1:ans1, round2:"",  round3:""},

                {x:x12, y:y22,round1:"",  round2:ans4,  round3:""},

                {x:"", y:"", round1:ans2, round2:"",    round3:ans6},

                {x:x13, y:y23, round1:"", round2:ans5,  round3:""},

                {x:"", y:"", round1:ans3, round2:"",  round3:""},

                {x:x14, y:y24, round1:"", round2:"",  round3:""},]


    let calxc = (event) => {
        event.preventDefault()
        let ans=[] ;
        let val =value
        let b1 = math.evaluate(y21) 
            console.log(val)
            ans = findvalue(x,y,val);
        setan1(ans[0])//b2
        setan2(ans[1])//term2
        setan3(ans[2])//term3
        setan4(ans[3])//b3
        setan5(ans[4])//term4
        setan6(ans[5])//b4
        let formular = ((ans[0]*(val-x11)) + (ans[3]*((val-x11)*(val-x12))) + (ans[4]*((val-x11)*(val-x12)*(val-x13)))+b1);

        setan7(formular)
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
                                        step={0.1} value={x11}  onChange={(e)=> setx11(e.target.value)}/>
                                    
                                    <input type="number" className=" p-2 border border-2  border-dark
                                    form-control w-45 " 
                                            step={0.1}    value={x12} onChange={(e)=> setx12(e.target.value)}/>
                                    
                                    <input type="number" className=" p-2 border border-2  border-dark
                                    form-control w-45 " 
                                        step={0.1}   value={x13} onChange={(e)=> setx13(e.target.value)}/>
                                    
                                    <input type="number" className=" p-2 border border-2 border-dark
                                    form-control w-45 " 
                                        step={0.1}  value={x14} onChange={(e)=> setx14(e.target.value)}/>
                                    
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
                                        
                                <button type="submit" class="btn btn-success
                                            border border-4  form-control  p-2">
                                            Calculate</button>
                            </div>
                    </div>
                    <div className='col '>
                    <LineChart
									width={450}
									height={300}
									data={anschart}
									margin={{
										top: 5,
										right: 40,
										left: 20,
										bottom: 5
									}}
									>
									<CartesianGrid strokeDasharray="4 4" />
									<XAxis  dataKey="x"/>
									<YAxis />
									<Tooltip />
									<Legend />
									<Line
										type="monotone"
										dataKey="y"
										stroke="#8884d8"
										activeDot={{ r: 5 }}
									/>
									{/* <Line type="monotone" dataKey="" stroke="#82ca9d" /> */}
									</LineChart>
                    </div>

                    </div>
                  </center>
                       
                </form><br />  
                            <center>
                                <div className='mb-3 row g-3 w-75 '>
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
                                            </div>
                                <h5>Value of {value} is : {ans7}</h5>
                </center>

            </div>
    )
  };