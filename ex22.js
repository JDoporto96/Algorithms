// "There is a set of N fish that are of varying sizes (no two are alike) and travel in one of two possible directions. Initially all fish are alive. When the fish meet each other, the larger fish will eat the smaller fish. Determine how many fish will be alive at the end of any given arrangement.

// example:
// -------------------------------------------------------------
//       <-2   6->    1->     <-7  <-5   4->   <-3
// -------------------------------------------------------------

// 4 fish remain"


// I'll use the same array structure to denote de movement of fishes. 
// a second array will contain the fish size

const sizes=[2,6,1,7,5,4,3];
const directions=[1,0,0,1,1,0,1];

function countFishies(sizes, directions){
    let remainingFish=0;

    let i;

    while(directions.includes(0)){
        i= directions.length;

        while(directions[i-1] != 1){
            remainingFish++;
            sizes.pop();
            directions.pop();
            i--;
        }

        if(directions.length==0){
            break
        }

        let n = directions.lastIndexOf(0);

        while(n<directions.length -1){
            if(sizes[n] > sizes[n+1]){
                sizes.splice(n+1,1);
                directions.splice(n+1,1);
            }else{
                sizes.splice(n,1);
                directions.splice(n,1);
                break
            }
        }


    }

    remainingFish+=directions.length;
      
    
    return remainingFish;
}

console.log(countFishies(sizes, directions))