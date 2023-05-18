// Display the numbers from 1 to 100 without using loops/conditionals

function printUpTo(s,n){
    switch(s){
        case n:
            console.log(s);
            return

        default:
            console.log(s)
            printUpTo(s+1,n);
            break
    }

}

printUpTo(1,100)