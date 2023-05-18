//Shuffle an array

const input = [1,2,3,4,5,6]

function shuffleArray(arr){
    for(let i=arr.length-1; i>0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr
}


console.log(shuffleArray(input))