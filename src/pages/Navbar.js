import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { ImHome }from 'react-icons/im';


function Navbar() {
  return (
           <>
              <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
                        data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                  
                  <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" 
                  id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                      <div className="offcanvas-header">
                        <h1 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                          Calculater Nummerical</h1>
                        <button type="button" className="btn-close btn-close-white" 
                        data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>

                    <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                          <a className="nav-link active fs-5" aria-current="page" href="/">
                             <br/><h3><ImHome /></h3>
                            
                          </a>
                            <h3>Root of equation</h3>
                          <hr/>
                     
                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/Bisection">Bisection Method</a>
                          
                             
                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/false">Flase position Method</a>
                     
                          
                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/Newton">Newton Raphson Method</a>
                        
                            
                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/Secant">Secant Method</a>
                      
                           
                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/Onepoint">one Point Iteration Method</a>
                     
                                <br/>
                                  <h3>Linear algebra</h3>
                                <hr/>
                           
                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/Cramer">Carmer's Rule</a>
                         
                  
                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/Gaussjd">Guss-Jordan Method</a>
                           
                         
                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/GaussEM">gaussian-elimination Method</a>
                       
                         
                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/Matrixinversion">Matrix inversion Method</a>

                                <br/>
                                  <h3>Interpolation</h3>
                                <hr/>

                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/NewtonInterpolation">NewtonInterpolation Method</a>
                        
                                <br/>
                                  <h3>Linear Regression</h3>
                                <hr/>
                                
                                <a className="nav-link active fs-5" aria-current="page" 
                                href="/NewtonRegression">Linear Regression</a>

                      </ul>
                      
                    </div>
                  </div>
              
                </div>
            </nav>
          
              
        
                      
                      
              

    </>
  );
}

export default Navbar;
