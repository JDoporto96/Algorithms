// Find groups of 1's in an MxN matrix

const input = [[1,1,0,1,1],[1, 1, 0, 1, 1],[1, 0, 0, 1, 1],[0, 0, 0, 0, 0],[1, 1, 1, 1, 1]]

function DFS(M, i, j, m, n){
    if(i<0 || j<0 || i>(m-1) || j>(n-1)||M[i][j]!=1){
        return
    }else{
        {
            M[i][j] = 0;
            DFS(M, i + 1, j, n, m);     
            DFS(M, i - 1, j, n, m);     
            DFS(M, i, j + 1, n, m);     
            DFS(M, i, j - 1, n, m);     
            DFS(M, i + 1, j + 1, n, m); 
            DFS(M, i - 1, j - 1, n, m); 
            DFS(M, i + 1, j - 1, n, m); 
            DFS(M, i - 1, j + 1, n, m); 
        }
    }
}

function countGroups(M){
    const m = M.length;
    const n = M[0].length;
    let count = 0;

    for (let i = 0; i<m;i++){
        for(let j = 0; j<n;j++){

            if (M[i][j] == 1){

                M[i][j] = 0;
                count++;
                DFS(M, i + 1, j, n, m);     
                DFS(M, i - 1, j, n, m);     
                DFS(M, i, j + 1, n, m);     
                DFS(M, i, j - 1, n, m);     
                DFS(M, i + 1, j + 1, n, m); 
                DFS(M, i - 1, j - 1, n, m); 
                DFS(M, i + 1, j - 1, n, m); 
                DFS(M, i - 1, j + 1, n, m); 
            }
        }
    }  
    
    console.log("The number of groups is", count) 

    
}

countGroups(input)
