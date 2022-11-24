import * as math from 'mathjs';
import { multiply } from 'mathjs';

export function MatrixInversions(mat)
{
    let mattra = Matrixset(mat);
    let Matrixdett = math.inv(mattra);
    let matsetans =[mat[0][3], mat[1][3], mat[2][3]];

    let msa = multiply(Matrixdett,matsetans);
    
    console.log(msa);
    return msa ;
}
export function Matrixset(coeff)
{
    let matcreat =  [[coeff[0][0], coeff[0][1], coeff[0][2],],
                    [coeff[1][0], coeff[1][1], coeff[1][2],],
                    [coeff[2][0], coeff[2][1], coeff[2][2],]];
                    
    return matcreat;

}
// export function Matrixdet(mat)
// {
//     let matdet = math.det(mat);
    
//     return matdet ;
// }
