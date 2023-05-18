//Given an array of numbers of length N, find the index of that array that balances the left and right sum.

const arr = [1,2,3,4,9,9,2,7,10,13];

const equalizer = (arr)=>{
    let sumLeft = 0
    let sumRight= 0;
    let i = 0;
    let j = arr.length -1;
    while(i<=j){
        if(sumLeft < sumRight){
            sumLeft+=arr[i];
            i++;
        }else{
            sumRight+=arr[j];
            j--
        }
    }
    if(sumLeft === sumRight) return j

    return -1
}

console.log(equalizer(arr))