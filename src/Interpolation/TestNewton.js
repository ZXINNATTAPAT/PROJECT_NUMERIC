export function fx(y0,y1,x0,x1){
  let fx = (y1-y0)/(x1-x0) ;
  return fx ;
}

export function findvalue(x,y,value){
  
  
  //#############round1##################
  let b2 = fx(y[0],y[1],x[0],x[1]);//teram1
  let term2 = fx(y[1],y[2],x[1],x[2]);
  let term3 = fx(y[2],y[3],x[2],x[3]);
  //############round2###################
  let b3 =(term2-b2)/(x[2]-x[0]);
  let term4 =(term3-term2)/(x[3]-x[1]);
  //###########round3#################
  let b4 =(term4-b3)/(x[3]-x[1]);

  
  
  let arr = [b2,term2,term3,b3,term4,b4];

  return (arr) ;
}
// 
// +
// +
// let term1 = (y[1]-y[0]/x[1]-x[0]);
  
//   let term2 = (y[2]-y[1]/x[2]-x[1]);
//   let term3 =(y[3]-y[2]/x[3]-x[2]);
//   let term4 = (term2-term1/x[2]-x[0]);
//   let term5 = (term3-term2/x[3]-x[1]);
//   let term6 = (term5 -term4/x[3]-x[0]);

//   let fxz =(y[0] + term1*(value-x[0]) + term4*(x-x[0])*(x-x[1]));

//   let arr = [term1,term2,term3,term4,term5,term6,fxz];