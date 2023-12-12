import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Formnewton from '../Components/Formnewton';
import Navbar from './Navbar';


export default function Newton(){
		  return (
			<div>
				<Navbar/>
				<br/><br/><br/>
				<div className='container'>
					<div>
						<div className="" >
						
						<center><h1>Newton Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<Formnewton />
																		
							</div>
					</div>
						
				</div>
			</div>
		  );
		};