// Find the greatest area formed by rectangles of 1's in a binary matrix

const A =[[0,0,0,1,0,0,0],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0]]
// A = 0, 0, 0, 1, 0, 0, 0
//     0, 0, 1, 1, 1, 0, 0
//     0, 1, 1, 1, 1, 0, 0

const B =[[0,0,0,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,1,1,1,0,0,0,0],
[0,0,0,1,1,1,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,0,0,0,0,1,1,1,0,0,0]]

// B = 0,0,0,1,1,1,0,0,0,0,0,0,0,0
//     0,0,0,1,1,1,1,1,1,1,0,0,0,0
//     0,0,0,1,1,1,1,1,1,1,1,1,0,0
//     0,0,0,0,0,0,0,1,1,1,1,1,0,0
//     0,0,0,0,0,0,0,1,1,1,0,0,0,0
//     0,0,0,0,0,0,0,0,0,0,0,0,0,0
//     0,1,1,1,1,1,1,1,1,1,1,1,1,0
//     0,0,1,1,1,1,1,1,1,1,1,1,1,1
//     0,0,0,0,0,0,0,0,1,1,1,0,0,0


function maxRectangle(matrix){
    if(matrix== null || matrix.length ===0 || matrix[0].length===0){
        return 0
    }
    const m = matrix.length
    const n = matrix[0].length

    const left = Array(n).fill(0);
    const right = Array(n).fill(n);
    const height = Array(n).fill(0);
    
    let maxArea = 0;

    for(let i=0; i<m; i++){
        let currentLeft = 0;
        let currentRight = n;

        for(let j=0; j<n; j++) {
            if(matrix[i][j] == 1) {
                height[j]++;
                left[j] = Math.max(left[j], currentLeft);
            } else {
                height[j] = 0;
                left[j] = 0; 
                currentLeft = j+1;
            }
        }

        for(let j=n-1; j>=0; j--) {
            if(matrix[i][j] == 1) {
                right[j] = Math.min(right[j], currentRight);
            } else {
                right[j] = n;
                currentRight = j;
            }
        }
      
        for(let j=0; j<n; j++) {
            maxArea = Math.max(maxArea, (right[j]-left[j])*height[j]);
        }

    }
   
    return maxArea;
}

console.log(maxRectangle(A));
console.log(maxRectangle(B));
