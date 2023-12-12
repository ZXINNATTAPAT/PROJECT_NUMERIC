import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Formmatrixinversion from '../Components_Linear/Form_matrixinversion';
import Navbar from '../pages/Navbar';


export default function Matrixinversion(){
		  return (
			<div>
				<Navbar/>
				<br/><br/><br/>
				<div className='container'>
					<div>
						<div className="" >
						
						<center><h1>Matrixinversion Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<Formmatrixinversion />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};