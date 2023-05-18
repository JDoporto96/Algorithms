//Write a function that will reverse N sized blocks of an array.

const arr = [0,1,2,3,4,5,6,7,8,9];
const blockSize = 3;

function reverseBlocks(arr,blockSize){
    let n = arr.length;
    let i=0;
    let j=blockSize;

    while(j<=n){
        const temp = arr.slice(i,j).reverse();
        while(i<j){
            arr[i]=temp[i+blockSize-j]
            i++
        }
        j+=blockSize;
    }
   
    return arr
}

console.log(reverseBlocks(arr,blockSize))



