import React, { useState } from "react"
import { findSolution4x4 } from "../Components_Linear/Test_Cramer"


export default function Input4x4() {

    const [x11, setx11] = useState()
    const [x12, setx12] = useState()
    const [x13, setx13] = useState()
    const [x14, setx14] = useState()

    const [xa, setxa] = useState()

    const [x21, setx21] = useState()
    const [x22, setx22] = useState()
    const [x23, setx23] = useState()
    const [x24, setx24] = useState()

    const [xb, setxb] = useState()

    const [x31, setx31] = useState()
    const [x32, setx32] = useState()
    const [x33, setx33] = useState()
    const [x34, setx34] = useState()

    const [xc, setxc] = useState()

    const [x41, setx41] = useState()
    const [x42, setx42] = useState()
    const [x43, setx43] = useState()
    const [x44, setx44] = useState()

    const [xd, setxd] = useState()

    const [ans_x1, setansx1] = useState()
    const [ans_x2, setansx2] = useState()
    const [ans_x3, setansx3] = useState()
    const [ans_x4, setansx4] = useState()



    let Matrix = [[x11, x12, x13, x14, xa],
    [x21, x22, x23, x24, xb],
    [x31, x32, x33, x34, xc],
    [x41, x42, x43, x44, xd]]

    console.log(Matrix)//follow value Matrix

    let calCarmer = (event) => {
        event.preventDefault()
        let ans_Matrix = findSolution4x4(Matrix)
        setansx1(ans_Matrix[0])
        setansx2(ans_Matrix[1])
        setansx3(ans_Matrix[2])
        setansx4(ans_Matrix[3])
        console.log(ans_x1)
        console.log(ans_x2)
        console.log(ans_x3)
        console.log(ans_x4)

    }
    return (
        <div className="Lost">

            <form onSubmit={calCarmer}>
                <div className="row">
                    <div className="col">
                        <div className="form-group input_form_label">
                            <div class="container form-group input_form_label"><br />
                                <div class="row m-2">

                                    <input type="number" className=" p-2 m-1 col form-control" value={x11} placeholder="x11" onChange={(e) => setx11(e.target.value)} />

                                    <input type="number" className=" p-2 m-1 col form-control" value={x12} placeholder="x12" onChange={(e) => setx12(e.target.value)} />

                                    <input type="number" className=" p-2 m-1 col form-control" value={x13} placeholder="x13" onChange={(e) => setx13(e.target.value)} />

                                    <input type="number" className=" p-2 m-1 col form-control" value={x14} placeholder="x14" onChange={(e) => setx14(e.target.value)} />

                                    <input type="number" className=" p-2 m-1 col form-control" value={xa} placeholder="xa" onChange={(e) => setxa(e.target.value)} />
                                </div><br />
                                <div class="row m-2">

                                    <input type="number" className=" p-2 m-1 col form-control" value={x21} placeholder="x21" onChange={(e) => setx21(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={x22} placeholder="x22" onChange={(e) => setx22(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={x23} placeholder="x23" onChange={(e) => setx23(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={x24} placeholder="x24" onChange={(e) => setx24(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={xb} placeholder="xb" onChange={(e) => setxb(e.target.value)} />

                                </div><br />
                                <div class="row m-2">

                                    <input type="number" className=" p-2 m-1 col form-control" value={x31} placeholder="x31" onChange={(e) => setx31(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={x32} placeholder="x32" onChange={(e) => setx32(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={x33} placeholder="x33" onChange={(e) => setx33(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={x34} placeholder="x34" onChange={(e) => setx34(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={xc} placeholder="xc" onChange={(e) => setxc(e.target.value)} />

                                </div><br />
                                <div class="row m-2">

                                    <input type="number" className=" p-2 m-1 col form-control" value={x41} placeholder="x41" onChange={(e) => setx41(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={x42} placeholder="x42" onChange={(e) => setx42(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={x43} placeholder="x43" onChange={(e) => setx43(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={x44} placeholder="x44" onChange={(e) => setx44(e.target.value)} />


                                    <input type="number" className=" p-2 m-1 col form-control" value={xd} placeholder="xd" onChange={(e) => setxd(e.target.value)} />

                                </div><br />
                                <button type="submit" class="btn btn-primary ">Calculate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form><br />

            <p>X1:  {ans_x1}</p>
            <p>X2:  {ans_x2}</p>
            <p>x3:  {ans_x3}</p>
            <p>x4:  {ans_x4}</p>
        </div>
    )
}