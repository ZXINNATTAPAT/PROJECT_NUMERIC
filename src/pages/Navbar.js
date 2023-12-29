import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { ImHome }from 'react-icons/im';


function Navbar() {
  return (
           <>
              <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                  
              <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                  <div className="offcanvas-header">
                    <h1 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Calculater Nummerical</h1>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                <div className="offcanvas-body">
                
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/">
                        <h3><ImHome /></h3>
                       </a>
                       <h2 > Root of equation</h2>
                       
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/Bisection">Bisection Method</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/false">Flase position Method</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/Newton">Newton Raphson Method</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/Secant">Secant Method</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/Onepoint">one Point Iteration Method</a>
                    </li>
                    <h2>Linear algebra</h2>
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/Cramer">Carmer's Rule</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/Gaussjd">Guss-Jordan Method</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/GaussEM">gaussian-elimination Method</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/Matrixinversion">Matrix inversion Method</a>
                    </li>
                    <h2>Interpolation</h2>
                   
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/NewtonInterpolation">NewtonInterpolation Method</a>
                    </li>
                    <h2>Linear Regression</h2>
                    <li className="nav-item">
                      <a className="nav-link active fs-4" aria-current="page" href="/NewtonRegression">Linear Regression</a>
                    </li>
                   

                  </ul>
                  
                </div>
              </div>
              
            </div>
            

          </nav>
          <br></br>
              
        
                      
                      
              

    </>
  );
}

export default Navbar;
