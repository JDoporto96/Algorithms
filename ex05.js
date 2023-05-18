// Find the greatest area formed by rectangles of 1's in a binary matrix

let A=[[1, 2, 3, 4],[ 5, 6, 7, 8 ],[9, 10, 11, 12 ],[13, 14, 15, 16]];
console.log(A)

function rotateMtx(A){
    if(A.length !== A[0].length){
        throw new Error(" Input must be an squared matrix")
    }
    const N = A.length;

    for(let x = 0; x< (N/2); x++ ){
        for(let y = x; y < N -x -1; y++){
            let temp = A[x][y];
            A[x][y] = A[y][N-1-x];
            A[y][N-1-x] = A[N-1-x][N-1-y]
            A[N-1-x][N-1-y]= A[N-1-y][x]
            A[N-1-y][x] = temp
        }
    }

    return A
}

console.log(rotateMtx(A))