// "Given a set of N cars that travel at the same speed but may be traveling in opposite direction, 
// write a function that will determine the number of times cars will pass each other.

// -------------------------------------------------------------
//                  c->
//   c->                           c->
//          <-c                         <-c
//                                                 <-c                   
//                                                                c->
// -------------------------------------------------------------
//         7 times"

//Create a binary array that represents the direction the cars are moving
// 0 represents a car moving to the right and 1 to the left.
// The array indexes represent the cars from left to right position. 
// Ex. index 0 represent the cars with the left mos position.

const carsArr= [0,1,0,0,1,1,0];

function passingCars(arr){
    let n = arr.length;

    let countLeft=0;
    let total = 0;
    while(n>0){
        if(arr[n-1]==1){
            countLeft++;
        }else{
            total += countLeft;
        }
        n--;
    }

    return total
}

console.log(passingCars(carsArr))