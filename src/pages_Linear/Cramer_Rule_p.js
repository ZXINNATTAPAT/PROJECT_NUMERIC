import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import FormCramer from '../Components_Linear/Form_Cramer';
import Navbar from '../pages/Navbar';



export default function CramerRulep(){
		  return (
			<div>
				<Navbar/>
				<br/><br/><br/>
				<div className='container'>
					<div>
						<div className="" >
						
						<center><h1>Carmer's Rule Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
						
																		<FormCramer />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};
	
	
