import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Formsecant from '../Components/Formsecant';
import Navbar from './Navbar';


export default function Secantp(){
		  return (
			<div>
				<Navbar/><br/>
				<div className="container" >
					<h1 className='m-2'>Secant method</h1><br/>
						<Formsecant />
				</div><br/><br/><br/>
			</div>
		  );
		};