// Maximum value of an array without using loops

function maxAlgo(arr){
    return arr.reduce((a,b)=> Math.max(a,b))
}

const arr =[1,10,1,3,4]

console.log(maxAlgo(arr))