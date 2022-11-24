import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Formmatrixinversion from '../Components_Linear/Form_matrixinversion';


export default function Matrixinversion(){
		  return (
			<div>
				<div className='Bisectionpages container-xxl'>
					<div>
						<div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-75  p-3 shadow p-3 mb-5 bg-body rounded" >
						
						<center><h1>Matrixinversion Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<Formmatrixinversion />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};