//Find the 2nd largest number in a stream.

function* generateStream(){
    let numbers = [];
    for(let i = 0; i<101;i++){
        numbers.push(i);
        yield numbers
    }
}

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
  
function get2LargestInStream(stream){
    for(const val of stream()){
       console.log(get2Largest(val)) 
    }
}

get2LargestInStream(generateStream);