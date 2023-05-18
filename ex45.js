//Find the consecutive sequence of numbers that sums up to a target number

function findSum(sequence, target){
    const n = sequence.length;
    let i = 0;
    let res=[];

    while(i<n){
        if(res.length >0){
            const sum = res.length==1? res[0] : res.reduce((a,b)=>a+b);
            if(sum < target){
                res.push(sequence[i])
                i++;
            }else if(sum > target){
                res.shift();
            }else{
                return res;
            }
        }else{
            res.push(sequence[i])
            i++;
        }
        
    }
    return null;

}

const input=[1,5,7,3,5,2,1,8];
const output = findSum(input,14);
console.log(output)