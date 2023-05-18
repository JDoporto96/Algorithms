//Find the 2nd largest number

function get2Largest(arr){
    const n = arr.length;
    let first = arr[0];
    let second = null;

    for(let i = 1; i<n; i++){
        if(arr[i]>first){
            second = first;
            first = arr[i] 
        }else if(arr[i]>second || arr[i] <= first){
            second = arr[i]
        }
    }

    return second
}

const arr =[1,2,3,4,5,6,5,4,3,2,1,5,9]

console.log(get2Largest(arr))