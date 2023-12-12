import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Formflase from '../Components/Formflase';
import Navbar from './Navbar';


export default function False(){
		  return (
			<div>
				<Navbar/>
				<br/><br/><br/>
				<div className='container'>
						<div >
						<center><h1>False Position Method</h1></center>

						{/* ############################################ FORM INPUT ############################################ */}
																		<Formflase />
																		
						</div>
				</div>
			</div>
		  );
		};