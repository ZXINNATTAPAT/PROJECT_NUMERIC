import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import FromNewtonInterv2 from '../Components_Inter/FromNewtonInterver2';


export default function NewtonInterpolation(){
		  return (
			<div>
				<div className='Bisectionpages container-xxl'>
					<div>
						<div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-50  p-3 shadow p-3 mb-5 bg-body rounded" >
						
						<center><h1>Newton Interpolating Polynomial</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<FromNewtonInterv2 />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};