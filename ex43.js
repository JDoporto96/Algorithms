//Longest Common Subsequence (LCS)

function LCS(str1, str2){
    let m = str1.length;
    let n = str2.length;

    const Mtx = Array(m+1).fill().map(()=>Array(n+1));

    for(let i = 0; i<=m ;i++){
        for(let j = 0; j<=n ;j++){

            if(i==0 || j == 0){
               Mtx[i][j]=0;
            }else if(str1[i - 1] == str2[j - 1]){
                Mtx[i][j] = Mtx[i - 1][j - 1] + 1;
            }else{
                Mtx[i][j] = Math.max(Mtx[i - 1][j], Mtx[i][j - 1]);
            }
           
        }
        
    }
    
    return Mtx[m][n]
   
}
   

const str1 = "ABC"
const str2 = "AXBXC"

console.log(LCS(str1,str2))