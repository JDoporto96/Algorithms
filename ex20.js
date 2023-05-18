
const exp = "{[(a+b)-d*34]+[(2a-16)-2+(2ab)(ab)]}"

function isExpBalanced(string)
{
    let stk = [];
    for(let i = 0; i < string.length; i++){
        let x = string[i];
 
        if (x == '(' || x == '[' || x == '{'){
            stk.push(x);
        }else{
            let item;
            switch (x){
            case ')':
                item = stk.pop();
                if (item == '{' || item == '['){
                    return false;
                }
                continue
                    
            case '}':
                item = stk.pop();
          
                if (item == '(' || item == '['){
                    return false;
                }  
                continue
                    
            case ']':
                item = stk.pop();
                if (item== '(' || item == '{'){
                    return false;
                }  
                continue
            }
        }
 
        
    }
 
    return (stk.length == 0);
}

console.log(isExpBalanced(exp))