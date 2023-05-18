//Given a set of numbers of size N-1 whose values range from 1 to N, finding the missing number

function missingNumber(arr){
    let n = arr.length;
    const temp = new Array(n+1).fill(0);
    arr.forEach(el => {
        temp[el-1] =1
    });
    return temp.indexOf(0)+1;
}

const nums = [1,2,3,4,5,6,7,9]
console.log(missingNumber(nums))