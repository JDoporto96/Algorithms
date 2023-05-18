//"Given A, B, and C as inputs, determine if C can be formed by an interleaved combination of the characters of A and B. 
//Example: 
// A = ""abcd"" 
// B = ""abcd"" 
// C = ""aabcbcdd"""

function interleavedString(A,B,C){
    const m = A.length;
    const n = B.length;

    if(C.length != (m+n)){
        return false
    }
    
    const L = new Array(m+1).fill().map(()=>Array(n+1).fill(false));

    for(let i = 0; i<m+1; i++){
        for(let j = 0 ; j<n+1; j++){
            if (i == 0 && j == 0){
                L[i][j] = true;

            }else if (i == 0) {
                if (B[j - 1] == C[j - 1]){
                    L[i][j] = L[i][j - 1];
                }

            }else if (j == 0) {
                if (A[i - 1] == C[i - 1]){
                    L[i][j] = L[i - 1][j];
                }
                    
            }else if (A[i - 1] == C[i + j - 1] && B[j - 1] != C[i + j - 1]){
                L[i][j] = L[i - 1][j];

            }else if (A[i - 1] != C[i + j - 1] && B[j - 1] == C[i + j - 1]){
                L[i][j] = L[i][j - 1];

            }else if (A[i - 1] == C[i + j - 1] && B[j - 1] == C[i + j - 1]){
                L[i][j]= (L[i - 1][j] || L[i][j - 1]);
            }
                
        }
    }
    return L[m][n]
}

console.log(interleavedString("abcd","abcd","aabbccdd"))