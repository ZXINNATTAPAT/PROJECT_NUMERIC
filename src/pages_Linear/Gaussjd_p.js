import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Form_Gaussjordan from '../Components_Linear/Form_Gaussjordan';
import Navbar from '../pages/Navbar';


export default function Gaussjd(){
		  return (
			<div>
				<Navbar/>
				<br/><br/><br/>
				<div className='container'>
					<div>
						<div className="" >
						
						<center><h1>GaussJordan Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<Form_Gaussjordan />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};