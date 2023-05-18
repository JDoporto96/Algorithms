// Given an MxN matrix that is in ascending order both on rows and columns, create a search function.

const A = [[1,2,3,4],[2,4,6,8],[3,6,9,12]]

//          1   2   3   4
//          2   4   6   8
//          3   6   9   12


function sortedSearch(M, key){
    const m = M.length;
    const n = M[0].length;

    let i = 0;
    let j = n-1;

    while(i<m && j>=0){
        if(M[i][j]== key){
           console.log("Element found at", "i:",i, "j:",j )
           return
        }
        if(M[i][j] < key){
            i++
        }else{
            j--
        }
    }
    console.log("Key not found")
    return

}
sortedSearch(A, 6)
sortedSearch(A, 11)