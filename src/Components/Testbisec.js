import * as math from 'mathjs';

const i_arr =[]
const a_arr = []
const b_arr = []
const root_arr = [] 

export default function Bisection_method(a,b,eq){
    let Error_rate = 0.0000001;
    
    function func(x)
        {
            const node2 = math.parse(eq)
            const code2 = node2.compile()
            let scope = {x} 
            return  code2.evaluate(scope);
            // return  x*x*x*x-13;
        } 
    function mid(ax,bx){
        let mids=(ax+bx)/2;
        return mids
    }
    let i=0;
    let xm = a;
    // while((b-a) >= Error_rate)
    while((math.abs(b-a)/b)*100 >= Error_rate)
    {   a_arr.push(a);
        b_arr.push(b);
        
        xm = mid(a,b);

        if(func(xm) === 0.0){// Check if middle point is root
                break;
        }
        else if(func(xm) * func(a) < 0){// Decide the side to repeat the steps
            b = xm;
        }
        else{
            a = xm;
        }
        i++
        i_arr.push(i);
        root_arr.push(xm);
    }
    return xm ;
    // return console.log(xm) ;
}


export function DataTable(x){
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
        b_arr.length = 0 ;
        root_arr.length = 0;
    }
        

   return data;
//    return console.log(data) ;
}
//Testcase
// let a=1.5,b=2
// Bisection_method(a,b);
// DataTable();