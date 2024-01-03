import * as math from 'mathjs';

const i_arr =[]
const a_arr = []
const b_arr = []
const root_arr = [] 

export default function Secant_method(x1,x2,eq){
    let E = 0.0000001;
    
    function f(x)
        {
            const node2 = math.parse(eq)
            const code2 = node2.compile()
            let scope = {x} 
            return  code2.evaluate(scope);
        } 
    function f_x0(x1,x2){
        return (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
    }
    function f_c(x0,x1){
        return f(x1) * f(x0);
    }
    let n = 0, xm, x0, c;
   
        do {
            a_arr.push(x0);
            b_arr.push(x1);
            x0 = f_x0(x1,x2);
 
            c = f_c(x0,x1) ;
 
            // update the value of interval
            x1 = x2;
            x2 = x0;
 
            // update number of iteration
            n++;
            i_arr.push(n);
            // if x0 is the root of equation then break the loop
            if (c === 0)
                break;
            xm = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
            root_arr.push(xm);
        } while (Math.abs(xm - x0) >= E); // repeat the loop

    return xm ;
}

export function DataTablesecant(x){
    const data =[]
    const datax =[]
    for (let i = 0; i < i_arr.length; i++) {
        datax.push({iter:i_arr[i],x0:a_arr[i],x1:b_arr[i],xm:root_arr[i]});
      }
    for (let i = 0; i < i_arr.length; i++) {
        data.push(datax[i])
    }

    if(x === 1){
        // Clear the existing data
        data.length = 0;
        datax.length = 0;
        i_arr.length = 0;
        a_arr.length = 0;
        // b_arr.length = 0 ;
        root_arr.length = 0;
    }

   return data;
//    return console.log(data) ;
}
//Testcase
// let a=1.5,b=2
// Bisection_method(a,b);
// DataTable();