import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Formbis from '../Components/Formbis';
import Navbar from './Navbar';


export default function Bisection(){
		  return (
			<div>
				<Navbar/>
				<br/><br/><br/>
				<div className='container-fluid'>
					<div>
						<div className="container" >
						
						<center><h1>Bisection Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<Formbis />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};
		
	
		