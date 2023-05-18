// Merge two sorted arrays where one has enough space at the end for the other

const largeArray = [1,3,5,7,9].concat(new Array(5));
const smallArray = [0,2,4,6,8];
const largeArraySize = largeArray.length;
 
function mergeArrays(arr1,arr2){
    let i = arr1.length -1;
    let j = arr2.length -1;
    if(i<j){
        throw new Error("arr1 must have enough space to fit arr2 inside of it")
    }else{
        let k = i-j-1; 

        while (k >= 0 && j >= 0){
            arr1[k]>arr2[j]? (arr1[i] = arr1[k], k--):(arr1[i] = arr2[j], j--);
            i--;
        }
        while (k >= 0){
            arr1[i]=arr1[k];
            k--;
            i--;
        }
        while (j >= 0){
            arr1[i]=arr2[j];
            j--;
            i--;
        }
        return arr1
    }

}

mergeArrays(largeArray, smallArray);
console.log(largeArray)
console.log(largeArraySize === largeArray.length)
