import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import regulaFalsi from './Testflase';
import { DataTablefls } from './Testflase';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
  } from "recharts";
	
export default function Formflase()
{
    const [a, seta]=useState(0)
    const [b, setb]=useState(0)
    const [equation,setequation]=useState('')
    const [root1,setroot]=useState('')
    
    let calfalse = (event) => {
        event.preventDefault()
    //############################################ BISECTION METHOD ########################################
    let roots= regulaFalsi(a,b,equation);
       setroot(roots.toFixed(6));
    }
    //############################################ reload pages ############################################
    let reload=()=>{
			window.location.reload()
        }
	const datanew =DataTablefls();
	
    return(
        <div>
			<div className='container'>
				<br/>
				<div class="card border " >
					<div class="card-header bg-transparent ">False Position Method</div>
					<div class="card-body ">
				<form onSubmit ={calfalse} >
							<div className='row m-2'>
								<input type="text" class="form-control p-2 m-1" placeholder='Input Equation' id="formGroupExampleInput" 
									value={equation} onChange={(event)=> setequation(event.target.value)} />
							</div>
								
							<div class="row m-2 ">

								<input type="number" class="form-control col p-2 m-1" placeholder='Input A' id="formGroupExampleInput" step={0.1}
										value={a} onChange={(e)=> seta(e.target.value)}/>	
			
								<input type="number" class="form-control col p-2 m-1" placeholder='Input B' id="formGroupExampleInput" step={0.1}
										value={b} onChange={(e)=> setb(e.target.value)} />
									
							</div>
									
						<div class="row m-2">
								<button type="submit" class="btn btn-primary col  p-2 m-1" >Calculate</button>
					
								<button type="button" class="btn btn-secondary col p-2 m-1" onClick={reload}>Reload</button>
						</div>						
				</form>	

				<div className='row m-2'>
					<p className='col'>Equation {equation}</p>
					<p className='col'>Root is {root1}</p>
				</div><br/>
				
				<div className='row m-2'>
								<ResponsiveContainer width="100%" height={300}>
									<LineChart
											width={550}
											height={300}
											data={datanew}
											margin={{
												top: 5,
												right: 30,
												left: 20,
												bottom: 5
											}}
											>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="iter" />
											<YAxis />
											<Tooltip />
											<Legend />
											<Line
												type="monotone"
												dataKey="xm"
												stroke="#8884d8"
												activeDot={{ r: 8 }}
											/>
											{/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
									</LineChart>
								</ResponsiveContainer>
				</div><br/>
							
				<div className='row m-2'>
						<div className='overflow-auto col 'style={{height: '300px'}}>
								<table class="table table-bordered" >
															<thead>
																<tr>
																	<th > Iteration </th>
															<th > x0</th>
															<th > x1</th>
															<th > xm</th>
																</tr>
															</thead>
														<tbody>
															{datanew.map((val, key) => {
															return (
																<tr  key={key}>
																	<td >{val.iter}</td>
																	<td >{val.x0}</td>
																	<td >{val.x1}</td>
																	<td >{val.xm}</td>
																</tr>
															)})}
														</tbody>
												</table>
						</div>
				</div><br/>
								
				
							
				</div>
        		</div>
        	</div>
        </div>
    )
};