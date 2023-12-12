import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import FormGaussEM from '../Components_Linear/Form_GaussianEM';
import Navbar from '../pages/Navbar';



export default function GaussEM(){
		  return (
			<div>
				<Navbar/>
				<br/><br/><br/>
				<div className='container'>
					<div>
						<div className="" >
						
						<center><h1>Gauss-Elimination Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<FormGaussEM />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};