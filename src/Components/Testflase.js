import * as math from 'mathjs';

const i_arr = [];
const a_arr = [];
const b_arr = [];
const root_arr = [];

export default function regulaFalsi(a, b, eq) {
  const Error_rate = 0.0000001;

  function func(x) {
    const node2 = math.parse(eq);
    const code2 = node2.compile();
    let scope = { x };
    return code2.evaluate(scope);
  }

  function funcfls(a, b) {
    return (a * func(b) - b * func(a)) / (func(b) - func(a));
  }

  let ix = 0;
  let xm = a;

  while (Math.abs(func(xm)) > Error_rate) {
    a_arr.push(a);
    b_arr.push(b);

    xm = funcfls(a, b);

    // Check if the above found point is root
    if (func(xm) === 0) {
      break;
    } else if (func(xm) * func(a) < 0) {
      b = xm;
    } else {
      a = xm;
    }

    ix++;
    i_arr.push(ix);
    root_arr.push(xm);

    // Check if the change in the interval is small enough
    if (Math.abs(b - a) < Error_rate) {
      break;
    }
  }
  return xm;
}

export function DataTable(x) {
  const data = [];
  for (let i = 0; i < i_arr.length; i++) {
    data.push({ iter: i_arr[i], x0: a_arr[i], x1: b_arr[i], xm: root_arr[i] });
  }

  if(x === 1){
    // Clear the existing data
    data.length = 0;
    // datax.length = 0;
    i_arr.length = 0;
    a_arr.length = 0;
    b_arr.length = 0 ;
    root_arr.length = 0;
}
  return data;
}
