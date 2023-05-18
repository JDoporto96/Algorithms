//Reversing the odd words of a string

function oddReverse(str1){
    const arr = str1.split(" ")
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length % 2 !=0){
            arr[i] = arr[i].split("").reverse().join("")
        }
    }
    return arr.join(" ");
}

console.log(oddReverse("let us test this array"))