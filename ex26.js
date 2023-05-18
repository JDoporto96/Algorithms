//Find the distance between two strings

const str1 = "three";
const str2 = "tree";
function levenshtein(str1, str2){
    const levM = new Array(str2.length +1).fill().map(()=> new Array(str1.length+1).fill(0));
    for (let i = 0; i <= str1.length; i ++){
        levM[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j ++){
        levM[j][0] = j;
    }

    for (let j = 1; j <= str2.length; j ++){
        for (let i = 1; i <= str1.length; i ++){
            const track = str1[i - 1] === str2[j - 1] ? 0 : 1;
            levM[j][i] = Math.min(
                levM[j][i - 1] + 1, 
                levM[j - 1][i] + 1, 
                levM[j - 1][i - 1] + track
           );
        }
     }
     console.log(levM)
     return levM[str2.length][str1.length];
}

console.log(levenshtein(str1,str2))