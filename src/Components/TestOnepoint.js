import * as math from 'mathjs';

const i_arr =[]
const a_arr = []
const root_arr = [] 

export default function Onepoint(x,eq){
    
	let EPSILON = 0.0000001;
	
	function func(x)
	{
		    const node2 = math.parse(eq);
            const code2 = node2.compile();
            let scope = {x} ;
            return  code2.evaluate(scope);
	}
	
	function derivFunc(x)
	{   
        const node1 = math.parse(eq);
        const code2 =  math.derivative(node1, 'x');
        const code3 = code2.compile();
        let scope={x};
        return code3.evaluate(scope);
		
	}
        let ix = 0;
		let h = func(x) / derivFunc(x);
		while (Math.abs(h) >= EPSILON)
		{
            a_arr.push(x)
			h = func(x) / derivFunc(x);
			x = x - h;
            ix++
            i_arr.push(ix)
            root_arr.push(x)

		}

      return x ;
  }
  export function DataTableonenew(){
    const data =[]
    const datax =[]
    for (let i = 0; i < i_arr.length; i++) {
        datax.push({iter:i_arr[i],x0:a_arr[i],xm:root_arr[i]});
      }
    for (let i = 0; i < i_arr.length; i++) {
        data.push(datax[i])
    }
   return data;
}	
// // Initial values assumed
		// let x0 = -20;
		// newtonRaphson(x0);