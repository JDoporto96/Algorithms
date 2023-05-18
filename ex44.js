//Given a string of lowercase letters, 
//find a string that contains all unique characters and has the lowest lexicographic value possible

const str1 = "ahvbydqo";
const str2 ="bcqobqnciuqbqbbq"

function lowerLex(str){
    const max_char = 26;
    const letters = new Array(max_char).fill(0);
    for(let i = 0; i< str.length;i++){
        let index = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(letters[index] == 0)
        {letters[index]++
        }
    }
    let res="";
    for(let i = 0; i<letters.length; i++){
        if(letters[i]!=0){
            res += String.fromCharCode(i + 'a'.charCodeAt(0))
        }
    }

    return res;
}


console.log(lowerLex(str1))
console.log(lowerLex(str1).localeCompare(str1))

console.log(lowerLex(str2))
console.log(lowerLex(str2).localeCompare(str2))
