import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import newton, { DataTableonenew } from './Testnewton';
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
	
export default function Formnewton()
{
    const [a, seta]=useState(0)
    const [equation,setequation]=useState('')
    const [root1,setroot]=useState('')
    
    let calfalse = (event) => {
        event.preventDefault()
		//#### BISECTION METHOD 
		let roots= newton(a,equation);
			if (!isNaN(roots)) {
				setroot(roots.toFixed(6));
			  } else {
				window.alert('Input error');
			  }
		}
		//#### reload pages ####
		let reload=()=>{
				window.location.reload()
			}
		const datanew = DataTableonenew();
	
    return(
        <div>
			<div className='container'><br/>
				<div className="card border" >
				<div className="card-header bg-transparent">Newton Raphson Method</div>
					<div className='card-body'>
						<form onSubmit ={calfalse} >
								<div className="row m-2">
									<input type="text" className="form-control p-2 m-1" placeholder='Input Equation' 
									id="formGroupExampleInput" 
									value={equation} onChange={(event)=> setequation(event.target.value)} />
										
									<input type="number" className="form-control p-2 m-1 " placeholder='Input A'
									id="formGroupExampleInput" step={0.1}
									value={a} onChange={(e)=> seta(e.target.value)}/>	
								</div>	
								
								<div className="m-2 row ">
										<button type="submit" 
										className="btn btn-primary form-control col p-2 m-1">Calculate</button>
									
										<button type="button" 
										className="btn btn-secondary form-control col p-2 m-1" 
										onClick={reload}>Reload</button>
								</div>						
						</form>	
									
						<div className='row m-2'>
							<p>Root is {root1}</p>
						</div>		

						<div className='row m-2'>
										<div className='overflow-auto col 'style={{height: '300px'}}>
														<table className="table table-bordered " >
																	<thead>
																		<tr>
																			<th >Iteration</th>
																			<th >x0</th>
																			<th >xm</th>
																		</tr>
																	</thead>
																<tbody>
																	{datanew.map((val, key) => {
																	return (
																		<tr  key={key}>
																			<td >{val.iter}</td>
																			<td >{val.x0}</td>
																			<td >{val.xm}</td>
																		</tr>
																	)})}
																</tbody>
														</table>
												
										</div>
									
										
									<div className='row m-2'>
										<div className='col' >
											<ResponsiveContainer width="100%" height={300}>
												<LineChart
														data={datanew}
														
														>
														<CartesianGrid strokeDasharray="10 10" />
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
														
												</LineChart>
											</ResponsiveContainer>
										</div>
									</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
};