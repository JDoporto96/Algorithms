// Optimize storing a sparse matrix

const A = [[1,0,0,0,0,5],[3,2,0,0,0,0],[0,0,0,6,1,0],[0,0,0,0,0,1],[0,0,0,0,2,0]]

//  1   0   0   0   0   5
//  3   2   0   0   0   0
//  0   0   0   6   1   0
//  0   0   0   0   0   1
//  0   0   0   0   2   0

class SparseMatrix{
    constructor(){
        this.data=[];
        this.row_count=[0];
        this.cols=[];
    }
    getElement(row,col){
        let min = this.row_count[row];
        let max = this.row_count[row+1];

        for(let i = min; i<max; i++){
            if(this.cols[i]=== col){
                return this.data[i]
            }
        }
        return 0
    }
}

function storeSparse(M){
    const sparseM = new SparseMatrix();
    const m = M.length;
    const n = M[0].length;
    let totalCount= 0;
    for (let i = 0;i<m;i++){
        let count = 0;
        for(let j = 0;j<n;j++){
            if(M[i][j] != 0){
                sparseM.data.push(M[i][j]);
                sparseM.cols.push(j);
                count++;
                totalCount++;
            }
        }
        let offset = sparseM.row_count[sparseM.row_count.length -1]
        if(offset){
            sparseM.row_count.push(count + offset )
        }else{
            sparseM.row_count.push(count)
        }
        
    }

    return sparseM

}

const sparseA=storeSparse(A);

console.log(sparseA.getElement(4,4))