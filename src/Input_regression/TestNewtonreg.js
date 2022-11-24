

import * as math from 'mathjs';
  
export function findsum(x,y){
    let xe = math.evaluate(x);
    let ye =math.evaluate(y);
    let sumxy=0,sumxx=0,sumyy=0,sumx=0,sumy=0 ;
    
    console.log(xe)
    for(let i=0;i<5;i++){
        sumx = (sumx + (xe[i]))
        console.log(xe[i])
        
        sumy = (sumy +(ye[i]))
        sumxy = (sumxy + (xe[i]*ye[i]));
        sumxx = (sumxx + (xe[i]*xe[i]));
        sumyy = (sumyy + (ye[i]*ye[i]));
    }

    let arr =[sumx,sumy,sumxy,sumxx,sumyy];
    console.log(arr);
    return arr ;

  }
export function findregression(arr){

   let a =  ((arr[1]*arr[3]) - (arr[0]*arr[2]))/((5*arr[3])-(arr[0]*arr[0]));
   let b = ((5*arr[2])-(arr[0]*arr[1]))/((5*arr[3])-(arr[0]*arr[0]));
   let asx =[a,b]
    console.log(asx);
    
    return asx ;
}