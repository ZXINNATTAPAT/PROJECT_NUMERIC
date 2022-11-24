import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Formnewton from '../Components/Formnewton';


export default function Newton(){
		  return (
			<div>
				<div className='container-xxl'>
					<div>
						<div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-75  p-3 shadow p-3 mb-5 bg-body rounded" >
						
						<center><h1>Newton Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<Formnewton />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};