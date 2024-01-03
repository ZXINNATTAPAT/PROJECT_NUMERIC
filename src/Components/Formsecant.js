import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState ,useEffect} from 'react';
import { DataTablesecant } from './Testsecant';
import Secant_method from './Testsecant';
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
import axios from 'axios';

export default function Formsecant()
{
    const [a, seta]=useState(0)
    const [b, setb]=useState(0)
	
    const [equation,setequation]=useState('')
	const [problems, setProblems] = useState([]);
    const [root1,setroot]=useState('')

	const [datanew, setData_new] = useState([]);

	const [hasCalculated, setHasCalculated] = useState(false);
    
    let calBisection = (event) => {
        event.preventDefault()
		//## BISECTION METHOD ###
			let roots= Secant_method(a,b,equation);
			setroot(roots.toFixed(6));
			setData_new(DataTablesecant());
			setHasCalculated(false);
	}
	
    //## reload pages ##
	const reload = () => {
		// รีเซ็ตค่าทุกอย่างเมื่อคลิกปุ่ม Reload
		seta(0);
		setequation('');
		setroot('');
		setData_new(DataTablesecant(1));
		// setProblems(problem.id[1]);
		setHasCalculated(false);
	  };
	

	useEffect(() => {
		// Fetch problems when component mounts
		fetchProblems();
	  }, []); 
	
	  const fetchProblems = async () => {
		try {
		  	const response = await axios.get('http://localhost:5000/generateProblems');
			//   const response = await axios.get('https://numer-api.onrender.com/generateProblems');
		  	setProblems(response.data.problems);
			//   console.log(problems);
		} catch (error) {
		  console.error('Error fetching problems:', error);
		}
	  };

	  const handleSelectChange = (event) => {
		const selectedId = event.target.value;
		const selectedProblem = problems.find((problem) => problem.id === parseInt(selectedId, 10));
		
		// Ensure selectedProblem is not undefined before setting the state
		if (selectedProblem) {
		  setequation(selectedProblem.equation);
		  seta(selectedProblem.a);
		}
	  };
	
    return(
        <div>
			<div className='container'>
				<div className="card border" >
					<div className="card-header bg-transparent">Newton Raphson Method</div>
						<div className='card-body'>
								<form onSubmit ={calBisection} >
										<div className="row m-2">
											<input type="text" className="form-control col m-1 p-2" placeholder="Input Equation" id="formGroupExampleInput" 
												value={equation} onChange={(event)=> setequation(event.target.value)} />
													
											<select onChange={handleSelectChange} className="form-select col m-1 p-2" >
												<option value={null}>Equation example</option>
														{problems.map((problem) => (
															<option key={problem.id} value={problem.id}>
																{`${problem.equation}, A: ${problem.a}`}
															</option>
														))}		
											</select>
										</div>

										<div className="row m-2">
											<input type="number" className="form-control  col p-2 m-1" placeholder="Input A" id="formGroupExampleInput" step={0.1}
												value={a} onChange={(e)=> seta(e.target.value)}/>	
														
											<input type="number" className="form-control col p-2 m-1" placeholder="Input B" id="formGroupExampleInput" step={0.1}
												value={b} onChange={(e)=> setb(e.target.value)} />
										</div>
													
										<div className="row m-2">
												<button type="submit" className="btn btn-primary form-control col p-2 m-1" disabled={hasCalculated}>Calculate</button>
									
												<button type="button" className="btn btn-secondary form-control col p-2 m-1" onClick={reload}>Reload</button>
										</div>						
								</form>	

								<div className='row m-2'>
									<p className='col'>Equation {equation}</p>
									<p className='col'>Root is {root1}</p>
								</div>

									<div className='row m-2'>
										<ResponsiveContainer width="100%" height={300}>
											<LineChart
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
											</ResponsiveContainer>
									</div>

									<div className='row m-2'>
											<div className='overflow-auto  col'style={{height: '150px'}}>
													<table className="table table-bordered" >
														<thead>
															<tr>
															<th > Iteration </th>
																<th > x0 </th>
																<th > x1 </th>
																<th > xm </th>
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
									</div>

								
						</div>
					</div>
				</div>
        </div>
    )
};