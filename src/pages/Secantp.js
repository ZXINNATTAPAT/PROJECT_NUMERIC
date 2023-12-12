import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Formsecant from '../Components/Formsecant';
import Navbar from './Navbar';


export default function Secantp(){
		  return (
			<div>
				<Navbar/>
				<br/><br/><br/>
				<div className=''>
					<div>
						<div className="" >
						
						<center><h1>Secant method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<Formsecant />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};