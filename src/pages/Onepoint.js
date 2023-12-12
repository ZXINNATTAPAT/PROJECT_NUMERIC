import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import FormOnepoint from '../Components/FormOnepoint';
import Navbar from './Navbar';



export default function Onepointp(){
		  return (
			<div>
				<Navbar/>
				<br/><br/><br/>
				<div className='container'>
					<div>
						<div  >
						
						<center><h1>Fixed Point Iteration Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<FormOnepoint />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};