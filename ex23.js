//Convert a base 10 number to any other base by making use of stacks

function baseChange(n, base){
    if(n == 0){
        return n
    }
    
    let stk=[];
    let str="";
    while(n>0){
        stk.push(n%base);
        n = Math.floor(n/base);
    }
    while(stk.length>0){
        str+=stk.pop();
    }
    return str
    
}

console.log(baseChange(33,3))