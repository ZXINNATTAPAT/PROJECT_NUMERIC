import * as math from 'mathjs';

const i_arr =[]
const a_arr = []
const b_arr = []
const root_arr = [] 

export default function regulaFalsi(a,b,eq){
    let Error_rate= 0.0000001
    function func(x)
        {
            const node2 = math.parse(eq)
            const code2 = node2.compile()
            let scope = {x} 
            return  code2.evaluate(scope);
        } 
    function funcfls(a,b){
        let scope = ((a*func(b) - b*func(a))/ (func(b) - func(a)));
        return scope;
            
    }
        let ix = 0;
      let xm = a; 
    //   for (let i=0 ; i < Error_rate; i++)
    while((b-a)/b*100 >= Error_rate)
      {
            a_arr.push(a)
            b_arr.push(b)
          xm = funcfls(a,b);
 
          // Check if the above found point is root
          if (func(xm) === 0){
              break;
          }
          // Decide the side to repeat the steps
          else if (func(xm)*func(a) < 0){
              b = xm;
          }
          else{
              a = xm;
          }
          ix++
            i_arr.push(ix);
            root_arr.push(xm);

      }
      return xm ;
      
  }
  export function DataTablefls(){
    const data =[]
    const datax =[]
    for (let i = 0; i < i_arr.length; i++) {
        datax.push({iter:i_arr[i],x0:a_arr[i],x1:b_arr[i],xm:root_arr[i]});
      }
    for (let i = 0; i < i_arr.length; i++) {
        data.push(datax[i])
    }
   return data;
}