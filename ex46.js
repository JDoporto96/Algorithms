// Find the largest run of at most two distinct numbers 

function longestRunOfTwoNumbers(input){
    if(input.length < 2){
        return input
    }
    let str='';
    let temp='';
    let subtemp='';
    let i =0;

    for (let num of input){
        if(!temp.includes(num)){
            i++;
            if(i<=2){
                temp+=num;
            }else{
                i=2;
                str = str.length < temp.length? temp: str ;
                temp=subtemp+num;
            }
        }else{
            temp+=num;
        }
        subtemp = subtemp.endsWith(num)? subtemp+num:num
    }
    str = str.length < temp.length? temp: str ;

    return str
}


let input = "1212223311212223";
let output = longestRunOfTwoNumbers(input);
console.log(output)

input = "111";
output = longestRunOfTwoNumbers(input);
console.log(output)
