import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import FormOnepoint from '../Components/FormOnepoint';
import Navbar from './Navbar';



export default function Onepointp(){
		  return (
			<div>
				<Navbar/>
				<br/>
				<div className='container'>
					<div>
						<h1>Fixed Point Iteration Method</h1><br/>
						<FormOnepoint />
					</div>
				</div>
				<br/><br/><br/>
			</div>
		  );
		};