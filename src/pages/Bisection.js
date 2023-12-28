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
						<div className="container " >
							<h1 className='m-2'>Bisection Method</h1>
							<Formbis />
						</div>
					</div>
						
				</div>
			</div>
		  );
		};
		
	
		