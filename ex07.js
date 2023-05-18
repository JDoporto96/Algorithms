// Given an MxN matrix, if any element is zero, make that column and row all zeroes.

const A = [[0,1,2,1,3],[3,4,0,2,0],[1,3,1,5,2]]


function setZeroes(A){
    const m = A.length;
    const n = A[0].length
    let row0 = false;
    let col0 = false;


    for (let j=0; j<n; j++){
        if(A[0][j]==0){
            row0 = true;
        }
    }

    for (let i = 0; i<m; i++){
        if(A[i][0]==0){
            col0=true;
        }
    }

    for(let j=1;j<m;j++){
        for(let i=1; i<n; i++){
            if(A[j][i]===0){
                A[j][0]=0;
                A[0][i]=0;
            }

        }
    }

    for(let j=1;j<m;j++){
        for(let i =1; i<n; i++){
            if(A[0][i]==0 || A[j][0]==0)
            A[j][i]=0;

        }
    }

    if(row0){
        for(let i=0;i<n;i++){ 
            A[0][i]=0;
        }
    }
    
    if(col0){
        for(let j=0;j<m;j++){
            A[j][0]=0;
        }
    }

    return A
  
}

console.log(A)
console.log(setZeroes(A))