// Determine if a series of parenthesis are balanced, and if not, 
// how many parenthesis are missing at the first instance of an error

const exp = "a+b(3c+1-(2b+d(35f)))-(a+2b)"

function isExpBalanced(string){
    let stk = [];
    for(let i =0; i<string.length; i++){
        if(string[i] == "("){
            stk.push(string[i])
        }else if(string[i] == ")"){
           const item = stk.pop();
           if(!item){
            console.log('1 "(" missing in the expression')
            return false
           }
        }
    }
    if(stk.length == 0){
        return true
    }else{
        console.log(`${stk.length} ")" missing in the expression `)
        return false
    }
    
}

console.log(isExpBalanced(exp))