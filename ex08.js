// Given two arrays of single-digit numbers, 
// create a function that will add them and produce the result in the same format as the inputs. 
// Example: a = [9,9], b=[1] so o = [1,0,0]


const A=[9,9,9,9];
const B=[,1,];

function sumArrays(A, B){
    const long = A.length >= B.length ? A:B;
    const short = long==A? B:A
   
    const m = long.length -1;
    const n = short.length -1;
   

    const res=[];
    let addAtEnd=false;
    for(let i =0; i<=m; i++){
        let lSum = long[m-i]?long[m-i]:0
        let sSum = short[n-i]?short[n-i]:0
        let val = lSum+sSum;

        if(val>=10){
            if(i==m){
                addAtEnd = true
            }else{
                long[m-i-1]=long[m-i-1]+1
            }
            val-=10
        }
        res.unshift(val)

    }
    if(addAtEnd){res.unshift(1)}

    return res
}

const res = sumArrays(A,B)
console.log(res)
