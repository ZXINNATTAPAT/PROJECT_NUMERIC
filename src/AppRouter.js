import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Secantp from "./pages/Secantp"
import Class from "./pages/Class"
import Bisection from "./pages/Bisection"
import False from "./pages/False"
import Newtonx from "./pages/Newtonx"
import  Navbar  from "./pages/Navbar"
import Footer from "./pages/Footer"
import Gaussjd from "./pages_Linear/Gaussjd_p"
import CramerRulep from "./pages_Linear/Cramer_Rule_p"
import Onepointp from "./pages/Onepoint"
import GaussEM from "./pages_Linear/GaussEm"
import Matrixinversion from "./pages_Linear/Matrix_Inversion"
import NewtonInterpolation from "./Interpolation/NewtonInter_pages"
import Newtonregessionpages from "./Input_regression/Newtonregp"


export default function AppRouter() {
    return(
        <div className="container">
            <BrowserRouter>

                    <Navbar />

                    <Routes>

                        <Route path="/" element={<Home />} />

                        <Route path="/Bisection" element={<Bisection />} />

                        <Route path="/False" element={<False />} />

                        <Route path="/Newton" element={<Newtonx />} />

                        <Route path="/Secant" element={<Secantp />} />

                        <Route path="/Onepoint" element={<Onepointp />} />

                        <Route path="/Class" element={<Class />} />

                        <Route path="/Cramer" element={<CramerRulep />} />

                        <Route path="/Gaussjd" element={<Gaussjd />} />

                        <Route path="/GaussEM" element={<GaussEM />} />

                        <Route path="/Matrixinversion" element={<Matrixinversion />} />

                        <Route path="/NewtonInterpolation" element={<NewtonInterpolation />} />

                        <Route path="/NewtonRegression" element={<Newtonregessionpages />} />
                    

                </Routes>
                    <Footer />
            </BrowserRouter>
        </div>
    )
}

