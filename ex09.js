// Given an array with values ranging from 0 to n-1, 
//swap each array location with the value on the nth position with a[a[n]]


const input = [3,0,2,1];

function swapArr(arr){
    const n = arr.length;

    for(let i=0; i<n; i++){
        arr[i] += (arr[arr[i]]%n)*n;
    }

    for(let i=0; i<n; i++){
        arr[i] = Math.floor(arr[i]/n)
    }

    return arr
}
console.log(input)
console.log(swapArr(input))