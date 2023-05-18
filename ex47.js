//Find the majority number in an array

function findMajority(arr){
    let n = arr.length;
    const map = new Map();
    for(let i = 0; i< n ; i++){
        if(map.has(arr[i])){
            let count = map.get(arr[i])+1;
            if(count > Math.floor(n/2)){
                return arr[i]
            }else{
                map.set(arr[i],count)
            }
        }else{
            map.set(arr[i],1)
        }
    }
    return null;
}

const arr = [1,2,2,3,4,4,4];
console.log(findMajority(arr));

const arr2 = [1,2,4,3,4,4,4];
console.log(findMajority(arr2))