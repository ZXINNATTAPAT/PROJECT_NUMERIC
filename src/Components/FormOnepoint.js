import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Onepoint, { DataTableonenew } from './TestOnepoint';


	
export default function FormOnepoint()
{
    const [a, seta]=useState(0)
    const [equation,setequation]=useState('')
    const [root1,setroot]=useState('')
    
    let calfalse = (event) => {
        event.preventDefault()
    //############################################ BISECTION METHOD ########################################
    let roots= Onepoint(a,equation);
       setroot(roots.toFixed(6));
    }
    //############################################ reload pages ############################################
    let reload=()=>{
			window.location.reload()
        }
	const datanew =DataTableonenew();
	
    return(
        <div>
			<div className='container-fluid'>
				<form onSubmit ={calfalse} >
						<div class="mb-3">
									<label >Input Equation</label>
									<input type="text" class="form-control w-85 p-3 " id="formGroupExampleInput" 
										value={equation} onChange={(event)=> setequation(event.target.value)} />
								
										
											<label>Input A</label>
												<input type="number" class="form-control w-45 p-3 " id="formGroupExampleInput" step={0.1}
													value={a} onChange={(e)=> seta(e.target.value)}/>	
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
							
							<h5>Root is {root1}</h5>
							<div className='overflow-auto  'style={{height: '150px'}}>
									<table class="table table-dark " >
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
						

					
        	</div>
        </div>
    )
};