import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import FormOnepoint from '../Components/FormOnepoint';



export default function Onepointp(){
		  return (
			<div>
				<div className='container-xxl'>
					<div>
						<div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-75  p-3 shadow p-3 mb-5 bg-body rounded" >
						
						<center><h1>Fixed Point Iteration Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<FormOnepoint />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};