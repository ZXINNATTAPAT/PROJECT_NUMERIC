import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { DataTablesecant } from './Testsecant';
import Secant_method from './Testsecant';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
  } from "recharts";

export default function Formsecant()
{
    const [a, seta]=useState(0)
    const [b, setb]=useState(0)
    const [equation,setequation]=useState('')
    const [root1,setroot]=useState('')
    
    let calBisection = (event) => {
        event.preventDefault()
    //############################################ BISECTION METHOD ########################################
    let roots= Secant_method(a,b,equation);
       setroot(roots.toFixed(6));
    }
    //############################################ reload pages ############################################
    let reload=()=>{
			window.location.reload()
        }
	const datanew =DataTablesecant();
	
    return(
        <div>
			<div className='container-fluid'>
				<form onSubmit ={calBisection} >
						<div class="mb-3">
									<label >Input Equation</label>
									<input type="text" class="form-control w-85 p-3 " id="formGroupExampleInput" 
										value={equation} onChange={(event)=> setequation(event.target.value)} />
								</div>
									<div class="mb-3 row g-3">
										<div class="col">
											<label>Input A</label>
												<input type="number" class="form-control w-45 p-3 " id="formGroupExampleInput" step={0.1}
													value={a} onChange={(e)=> seta(e.target.value)}/>	
										</div>

										<div class="col">
											<label>Input B</label>
												<input type="number" class="form-control w-45 p-3" id="formGroupExampleInput" step={0.1}
													value={b} onChange={(e)=> setb(e.target.value)} />
											</div>
													
								</div>
									
						<div class="mb-3 row g-3">
							<div class="col">
								<button type="submit" class="btn btn-primary border border-2 
								form-control w-35 p-3" >Calculate</button>
							</div>

							<div class="col">
								<button type="button" class="btn btn-secondary border border-2 form-control w-35 p-3" 
										onClick={reload}>Reload</button>
							</div>
						</div>						
				</form>	
							<h5>Equation {equation}</h5>
							<h5>Root is {root1}</h5>
							<div className='row'>
								<div className='col'>
										<div className='overflow-auto  'style={{height: '150px'}}>
												<table class="table table-dark" >
													<thead>
														<tr>
														<th > <center>Iteration</center> </th>
															<th > <center>x0</center> </th>
															<th > <center>x1</center> </th>
															<th > <center>xm</center> </th>
														</tr>
													</thead>
														<tbody>
															{datanew.map((val, key) => {
															return (
																<tr  key={key}>
																	<td ><center>{val.iter}</center></td>
																	<td ><center>{val.x0}</center></td>
																	<td ><center>{val.x1}</center></td>
																	<td ><center>{val.xm}</center></td>
																</tr>
															)})}
														</tbody>
												</table>
										</div>
							</div>
							<div className='col'>
									<LineChart
											width={400}
											height={200}
											data={datanew}
											margin={{
												top: 5,
												right:0,
												left: 0,
												bottom: 5
											}}
											>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="x0" />
											<YAxis />
											<Tooltip />
											<Legend />
											<Line
												type="monotone"
												dataKey="xm"
												stroke="#8884d8"
												activeDot={{ r: 8 }}
											/>
											
											</LineChart>
								</div>
					</div>
        	</div>
        </div>
    )
};