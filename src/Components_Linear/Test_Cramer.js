import * as math from 'mathjs';
export function determinantOfMatrix(mat)
{
    let ans;
    ans = mat[0][0] * (mat[1][1] * mat[2][2] - mat[2][1] * mat[1][2])
        - mat[0][1] * (mat[1][0] * mat[2][2] - mat[1][2] * mat[2][0])
        + mat[0][2] * (mat[1][0] * mat[2][1] - mat[1][1] * mat[2][0]);
    return ans;
}
export function findSolution(coeff)
{

    let d = [[coeff[0][0], coeff[0][1], coeff[0][2]],
         [coeff[1][0], coeff[1][1], coeff[1][2]],
         [coeff[2][0], coeff[2][1], coeff[2][2]]];
     
   
    let d1 = [[coeff[0][3], coeff[0][1], coeff[0][2]],
          [coeff[1][3], coeff[1][1], coeff[1][2]],
          [coeff[2][3], coeff[2][1], coeff[2][2]]];
           
      
    let d2 = [[coeff[0][0], coeff[0][3], coeff[0][2]],
          [coeff[1][0], coeff[1][3], coeff[1][2]],
          [coeff[2][0], coeff[2][3], coeff[2][2]]];
     
   
    let d3 = [[coeff[0][0], coeff[0][1], coeff[0][3]],
          [coeff[1][0], coeff[1][1], coeff[1][3]],
          [coeff[2][0], coeff[2][1], coeff[2][3]]];
     
    let D = determinantOfMatrix(d);
    let D1 = determinantOfMatrix(d1);
    let D2 = determinantOfMatrix(d2);
    let D3 = determinantOfMatrix(d3);
    let arr =[] 
    // Case 1
    if (D !== 0)
    {
        
        let x = D1 / D;
        let y = D2 / D;
        let z = D3 / D; // calculating z using cramer's rule
		arr.push(x);
		arr.push(y);
		arr.push(z);
    }
    // Case 2
    else
    { }
	
	return arr ;
}

// Driver Code
// let coeff = [[2, -1, 3, 9],
//              [1, 1, 1, 6],
//              [1, -1, 1, 2]]
  
// findSolution(coeff);

//#########################INput2x2###############################

export function determinantOfMatrix2x2(mat)
{
    let ans;
    ans = (mat[0][0]*mat[1][1])-(mat[1][0]*mat[0][1]);
    return ans;
     
}
 
export function findSolution2x2(coeff)
{
// Matrix d using coeff as given in cramer's rule
    let d = [[coeff[0][0],coeff[0][1]],
            [coeff[1][0],coeff[1][1]]];
    // Matrix d1
    let d1 =[[coeff[0][2],coeff[0][1]],
            [coeff[1][2],coeff[1][1]]];
    // Matrix d2    
    let d2 =[[coeff[0][0],coeff[0][2]],
            [coeff[1][0],coeff[1][2]]]; 
    // Calculating Determinant of Matrices d, d1, d2, d3
    let D = determinantOfMatrix2x2(d);
    let D1 = determinantOfMatrix2x2(d1);
    let D2 = determinantOfMatrix2x2(d2);
    let arr2x2 =[] 
    // Case 1
    if (D !== 0)
    {
        let x = D1 / D;
        let y = D2 / D;
		arr2x2.push(x);
		arr2x2.push(y);
        console.log(x)
        console.log(y)
    }
    // Case 2
    else
    { }
	
	return arr2x2 ;
}


//############ 4x4 ######################
export function determinantOfMatrix4x4(mat)
{
    let ans;
    // ans =   ((mat[0][0]*mat[1][1]*mat[2][2]*mat[3][3])
    //         + (mat[0][1]*mat[1][2]*mat[2][3]*mat[3][0])
    //         + (mat[0][2]*mat[1][3]*mat[2][0]*mat[3][1]))
    //         - ((mat[3][0]*mat[2][1]*mat[1][2]*mat[0][3])
    //         + (mat[3][1]*mat[2][2]*mat[1][3]*mat[0][0])
    //         + (mat[3][2]*mat[2][3]*mat[1][0]*mat[0][1]));
    // ans = mat[0][0]*(mat[1][1]*mat[2][2]*mat[3][3] + mat[1][2]*mat[2][3]*mat[3][1] + mat[1][3]*mat[2][1]*mat[3][2]
    //             -mat[1][3]*mat[2][2]*mat[3][1] + mat[1][1]*mat[2][3]*mat[3][2] + mat[1][2]*mat[2][1]*mat[3][3])
    //         -mat[1][1]*(mat[0][0]*mat[2][2]*mat[3][0] + mat[0][2]*mat[2][3]*mat[3][0] + mat[0][3]*mat[2][0]*mat[3][2]
    //             -mat[3][2]*mat[2][2]*mat[0][3] + mat[3][2]*mat[2][3]*mat[0][0] + mat[3][0]*mat[2][0]*mat[0][2])
    //         +mat[2][2]*(mat[0][0]*mat[1][1]*mat[3][3] + mat[0][1]*mat[1][3]*mat[3][0] + mat[0][3]*mat[1][0]*mat[3][1]
    //             -mat[3][0]*mat[1][1]*mat[0][3] + mat[3][1]*mat[1][3]*mat[0][0] + mat[3][3]*mat[1][0]*mat[0][1])
    //         -mat[3][3]*(mat[0][0]*mat[1][1]*mat[2][2] + mat[0][1]*mat[1][2]*mat[2][0] + mat[0][2]*mat[1][0]*mat[2][1]
    //             -mat[2][0]*mat[1][1]*mat[0][2] + mat[2][1]*mat[1][2]*mat[0][0] + mat[2][2]*mat[1][0]*mat[0][1]);
    ans = math.det(mat);
    
    return ans;
     
}
 
export function findSolution4x4(coeff)
{

    let d = [[coeff[0][0], coeff[0][1], coeff[0][2],coeff[0][3]],
            [coeff[1][0], coeff[1][1], coeff[1][2],coeff[1][3]],
            [coeff[2][0], coeff[2][1], coeff[2][2],coeff[2][3]],
            [coeff[3][0], coeff[3][1], coeff[3][2],coeff[3][3]]];
     
    let d1 = [[coeff[0][4], coeff[0][1], coeff[0][2],coeff[0][3]],
                [coeff[1][4], coeff[1][1], coeff[1][2],coeff[1][3]],
                [coeff[2][4], coeff[2][1], coeff[2][2],coeff[2][3]],
                [coeff[3][4], coeff[3][1], coeff[3][2],coeff[3][3]]];
           
       
    let d2 = [[coeff[0][0], coeff[0][4], coeff[0][2],coeff[0][3]],
                [coeff[1][0], coeff[1][4], coeff[1][2],coeff[1][3]],
                [coeff[2][0], coeff[2][4], coeff[2][2],coeff[2][3]],
                [coeff[3][0], coeff[3][4], coeff[3][2],coeff[3][3]]];   
     
    
    let d3 = [[coeff[0][0], coeff[0][1], coeff[0][4],coeff[0][3]],
                [coeff[1][0], coeff[1][1], coeff[1][4],coeff[1][3]],
                [coeff[2][0], coeff[2][1], coeff[2][4],coeff[2][3]],
                [coeff[3][0], coeff[3][1], coeff[3][4],coeff[3][3]]];
     
    let d4 = [[coeff[0][0], coeff[0][1], coeff[0][2],coeff[0][4]],
                [coeff[1][0], coeff[1][1], coeff[1][2],coeff[1][4]],
                [coeff[2][0], coeff[2][1], coeff[2][2],coeff[2][4]],
                [coeff[3][0], coeff[3][1], coeff[3][2],coeff[3][4]]];
                
   
    let D = determinantOfMatrix4x4(d);
    // console.log(D)
    let D1 = determinantOfMatrix4x4(d1);
    // console.log(D1)
    let D2 = determinantOfMatrix4x4(d2);
    let D3 = determinantOfMatrix4x4(d3);
    let D4 = determinantOfMatrix4x4(d4);
    let arr =[] 
    // Case 1
    if (D !== 0)
    {
        // Coeff have a unique solution. Apply Cramer's Rule
        let x1 = D1 / D;
        let x2 = D2 / D;
        let x3 = D3 / D; 
        let x4 = D4 / D; 
		arr.push(x1.toFixed(4));
		arr.push(x2.toFixed(4));
		arr.push(x3.toFixed(4));
		arr.push(x4.toFixed(4));

        console.log(x1);
        console.log(x2);
        console.log(x3);
        console.log(x4);
    }
    // Case 2
    else
    { }
	
	return arr ;
}
export function determinantOfMatrix5x5(mat)
{
    let ans;
    ans = math.det(mat);
    return ans;
}
 
export function findSolution5x5(coeff)
{
    let d = [[coeff[0][0], coeff[0][1], coeff[0][2],coeff[0][3],coeff[0][4]],
            [coeff[1][0], coeff[1][1], coeff[1][2],coeff[1][3],coeff[1][4]],
            [coeff[2][0], coeff[2][1], coeff[2][2],coeff[2][3],coeff[1][4]],
            [coeff[3][0], coeff[3][1], coeff[3][2],coeff[3][3],coeff[1][4]],
            [coeff[4][0], coeff[4][1], coeff[4][2],coeff[4][3],coeff[1][4]]];
     

    let d1 = [[coeff[0][5], coeff[0][1], coeff[0][2],coeff[0][3],coeff[0][4]],
                [coeff[1][5], coeff[1][1], coeff[1][2],coeff[1][3],coeff[1][4]],
                [coeff[2][5], coeff[2][1], coeff[2][2],coeff[2][3],coeff[2][4]],
                [coeff[3][5], coeff[3][1], coeff[3][2],coeff[3][3],coeff[3][4]],
                [coeff[4][5], coeff[4][1], coeff[4][2],coeff[4][3],coeff[4][4]]];
        
       
    let d2 = [[coeff[0][0], coeff[0][5], coeff[0][2],coeff[0][3],coeff[0][4]],
                [coeff[1][0], coeff[1][5], coeff[1][2],coeff[1][3],coeff[1][4]],
                [coeff[2][0], coeff[2][5], coeff[2][2],coeff[2][3],coeff[2][4]],
                [coeff[3][0], coeff[3][5], coeff[3][2],coeff[3][3],coeff[3][4]],
                [coeff[4][0], coeff[4][5], coeff[4][2],coeff[4][3],coeff[4][4]]];  
     
    
    let d3 =[[coeff[0][0], coeff[0][1], coeff[0][5],coeff[0][3],coeff[0][4]],
            [coeff[1][0], coeff[1][1], coeff[1][5],coeff[1][3],coeff[1][4]],
            [coeff[2][0], coeff[2][1], coeff[2][5],coeff[2][3],coeff[2][4]],
            [coeff[3][0], coeff[3][1], coeff[3][5],coeff[3][3],coeff[3][4]],
            [coeff[4][0], coeff[4][1], coeff[4][5],coeff[4][3],coeff[4][4]]];
     
    let d4 = [[coeff[0][0], coeff[0][1], coeff[0][2],coeff[0][5],coeff[0][4]],
            [coeff[1][0], coeff[1][1], coeff[1][2],coeff[1][5],coeff[1][4]],
            [coeff[2][0], coeff[2][1], coeff[2][2],coeff[2][5],coeff[2][4]],
            [coeff[3][0], coeff[3][1], coeff[3][2],coeff[3][5],coeff[3][4]],
            [coeff[4][0], coeff[4][1], coeff[4][2],coeff[4][5],coeff[4][4]]];

    let d5 = [[coeff[0][0], coeff[0][1], coeff[0][2],coeff[0][3],coeff[0][5]],
                [coeff[1][0], coeff[1][1], coeff[1][2],coeff[1][3],coeff[1][5]],
                [coeff[2][0], coeff[2][1], coeff[2][2],coeff[2][3],coeff[2][5]],
                [coeff[3][0], coeff[3][1], coeff[3][2],coeff[3][3],coeff[3][5]],
                [coeff[4][0], coeff[4][1], coeff[4][2],coeff[4][3],coeff[4][5]]];
                
    // Calculating Determinant of Matrices d, d1, d2, d3
    let D = determinantOfMatrix5x5(d);
    console.log(D)
    let D1 = determinantOfMatrix5x5(d1);
    let D2 = determinantOfMatrix5x5(d2);
    let D3 = determinantOfMatrix5x5(d3);
    let D4 = determinantOfMatrix5x5(d4);
    let D5 = determinantOfMatrix5x5(d5);
    let arr =[] 
    // Case 1
    if (D !== 0)
    {
        // Coeff have a unique solution. Apply Cramer's Rule
        let x1 = D1/D ;
        let x2 = D2/D ;
        let x3 = D3/D  ; 
        let x4 = D4/D  ; 
        let x5 = D5/D ; 
		arr.push(x1.toFixed(4));
		arr.push(x2.toFixed(4));
		arr.push(x3.toFixed(4));
		arr.push(x4.toFixed(4));
		arr.push(x5.toFixed(4));
        // console.log(x1);
        // console.log(x2);
        // console.log(x3);
        // console.log(x4);
    }
    else
    { }
	
	return arr ;
}