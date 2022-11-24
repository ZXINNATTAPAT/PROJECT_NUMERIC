
export function PerformOperation(a,n, flag)
{
    let arr =[];
    let i, j, k = 0, c
    // Performing elementary operations
    for (i = 0; i < n; i++)
    {
        if (a[i][i] === 0)
        {
            c = 1;
            while ((i + c) < n && a[i + c][i] === 0)
                c++;        
            if ((i + c) === n)
            {
                flag = 1;
                break;
            }
            for (j = i, k = 0; k <= n; k++)
            {
                let temp =a[j][k];
                a[j][k] = a[j+c][k];
                a[j+c][k] = temp;
            }
        }
   
        for (j = 0; j < n; j++)
        {
               
            // Excluding all i == j
            if (i !== j)
            {
                let p = a[j][i] / a[i][i];
   
                for (k = 0; k <= n; k++)                
                    a[j][k] = a[j][k] - (a[i][k]) * p;            
            }
        }
    }
    let x1 = a[0][3] / a[0][0];
    let x2 = a[1][3] / a[1][1];
    let x3 = a[2][3] / a[2][2];
    
    arr.push(x1); 
    arr.push(x2); 
    arr.push(x3); 

    console.log(arr)
    return arr ;
}

//#################   2x2   ###################################
export function PerformOperation2x2(a,n, flag)
{
    let arr =[];
    let i, j, k = 0, c
    // Performing elementary operations
    for (i = 0; i < n; i++)
    {
        if (a[i][i] === 0)
        {
            c = 1;
            while ((i + c) < n && a[i + c][i] === 0)
                c++;        
            if ((i + c) === n)
            {
                flag = 1;
                break;
            }
            for (j = i, k = 0; k <= n; k++)
            {
                let temp =a[j][k];
                a[j][k] = a[j+c][k];
                a[j+c][k] = temp;
            }
        }
   
        for (j = 0; j < n; j++)
        {
               
            // Excluding all i == j
            if (i !== j)
            {
                let p = a[j][i] / a[i][i];
   
                for (k = 0; k <= n; k++)                
                    a[j][k] = a[j][k] - (a[i][k]) * p;            
            }
        }
    }
    let x1 = a[0][2] / a[0][0];
    let x2 = a[1][2] / a[1][1];
    
    arr.push(x1); 
    arr.push(x2); 
   

    console.log(arr)
    return arr ;
}

//###################################  4x4  ############################
export function PerformOperation4x4(a,n, flag)
{
    let arr =[];
    let i, j, k = 0, c
    // Performing elementary operations
    for (i = 0; i < n; i++)
    {
        if (a[i][i] === 0)
        {
            c = 1;
            while ((i + c) < n && a[i + c][i] === 0)
                c++;        
            if ((i + c) === n)
            {
                flag = 1;
                break;
            }
            for (j = i, k = 0; k <= n; k++)
            {
                let temp =a[j][k];
                a[j][k] = a[j+c][k];
                a[j+c][k] = temp;
            }
        }
   
        for (j = 0; j < n; j++)
        {
               
            // Excluding all i == j
            if (i !== j)
            {
                let p = a[j][i] / a[i][i];
   
                for (k = 0; k <= n; k++)                
                    a[j][k] = a[j][k] - (a[i][k]) * p;            
            }
        }
    }
    let x1 = a[0][4] / a[0][0];
    let x2 = a[1][4] / a[1][1];
    let x3 = a[2][4] / a[2][2];
    let x4 = a[3][4] / a[3][3];
    
    
    arr.push(x1); 
    arr.push(x2); 
    arr.push(x3); 
    arr.push(x4); 
   
    console.log(arr)
    return arr ;
}
//###################################  5x5  ############################
export function PerformOperation5x5(a,n, flag)
{
    let arr =[];
    let i, j, k = 0, c
    // Performing elementary operations
    for (i = 0; i < n; i++)
    {
        if (a[i][i] === 0)
        {
            c = 1;
            while ((i + c) < n && a[i + c][i] === 0)
                c++;        
            if ((i + c) === n)
            {
                flag = 1;
                break;
            }
            for (j = i, k = 0; k <= n; k++)
            {
                let temp =a[j][k];
                a[j][k] = a[j+c][k];
                a[j+c][k] = temp;
            }
        }
   
        for (j = 0; j < n; j++)
        {
               
            // Excluding all i == j
            if (i !== j)
            {
                let p = a[j][i] / a[i][i];
   
                for (k = 0; k <= n; k++)                
                    a[j][k] = a[j][k] - (a[i][k]) * p;            
            }
        }
    }
    let x1 = a[0][5] / a[0][0];
    let x2 = a[1][5] / a[1][1];
    let x3 = a[2][5] / a[2][2];
    let x4 = a[3][5] / a[3][3];
    let x5 = a[4][5] / a[4][4];
    
    
    arr.push(x1); 
    arr.push(x2); 
    arr.push(x3); 
    arr.push(x4); 
    arr.push(x5); 
   

    console.log(arr)
    return arr ;
}

// Driver code
// let a=[[ 0, 2, 1, 4 ],
//         [ 1, 1, 2, 6 ],
//         [ 2, 1, 1, 7 ]];
// Order of Matrix(n)
// let n = 3, flag = 0;
 


 

 


 
 
 

 
