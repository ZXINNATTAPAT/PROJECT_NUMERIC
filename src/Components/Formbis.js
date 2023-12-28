import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { DataTable } from './Testbisec';
import Bisection_method from './Testbisec'
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


export default function Formbis() {
	const [a, seta] = useState(0)
	const [b, setb] = useState(0)
	const [equation, setequation] = useState('')
	const [root1, setroot] = useState('')

	let calBisection = (event) => {
		event.preventDefault()
		//############################################ BISECTION METHOD ########################################
		let roots = Bisection_method(a, b, equation);
		console.log(roots);
		setroot(roots.toFixed(6));
	}
	//############################################ reload pages ############################################
	let reload = () => {
		window.location.reload()
	}

	const datanew = DataTable();

	return (
		<>
			<div className='container'><br />
				<div class="card border " >
					<div class="card-header bg-transparent ">Bisection Method</div>
					<div class="card-body ">
						<form onSubmit={calBisection} >

							<div className='row m-2'>
								<input type="text" class="form-control m-1 col p-2 " placeholder='Input Equation' id="formGroupExampleInput"
									value={equation} onChange={(event) => setequation(event.target.value)} />
							</div>

							<div class=" row m-2">

								<input type="number" class="form-control col m-1 p-2" placeholder='Input A' id="formGroupExampleInput" step={0.1}
									value={a} onChange={(e) => seta(e.target.value)} />

								<input type="number" class="form-control  col m-1 p-2" placeholder='Input B' id="formGroupExampleInput" step={0.1}
									value={b} onChange={(e) => setb(e.target.value)} />

							</div>

							<div className='row m-2'>
								<button type="submit" class="btn btn-primary col m-1  p-2" >Calculate</button>

								<button type="button" class="btn btn-secondary col m-1 p-2" onClick={reload}>Reload</button>
							</div>
						</form>

						<div className='row m-2'>
							<p className='col'>Equation {equation}</p>
							<p className='col'>Root is {root1}</p>
						</div>
						<div className='row m-2'>
							<div className='col'>
								<ResponsiveContainer width="100%" height={300}>
									<LineChart
										data={datanew}
										margin={{
											top: 0,
											right: 0,
											left: 0,
											bottom: 0
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
										{/* <Line type="monotone" dataKey="" stroke="#82ca9d" /> */}
									</LineChart>
								</ResponsiveContainer >
							</div>
						</div>

						<div className='row m-2'>
							<div className='overflow-auto col' style={{ height: '300px' }}>
								<table class="table table-bordered"  >
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
												<tr key={key}>
													<td ><center>{val.iter}</center></td>
													<td ><center>{val.x0}</center></td>
													<td ><center>{val.x1}</center></td>
													<td ><center>{val.xm}</center></td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>
						</div>

					</div>

				</div>

			</div><br />
		</>
	)
};
