// Optimize space through triangular arrays

const T = [["a"],["b","c"],["d","e","f"],["g","h","i","j"]]
const optT = T.flat();

//col1 col2
//  a                   row1
//  b   c               row2
//  d   e   f
//  g   h   i   j

console.log(T);
console.log(optT);


function getElement(T,row, col){
    if(col>row){
        throw new Error("Invalid position in a triangular matrix")
    }
    const d = r => (r+1)*(r/2);
    return T[(d(row-1)+col)]
}

console.log(getElement(optT,3,1))
