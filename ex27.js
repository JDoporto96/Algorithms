//Finding anagrams

function areAnagrams(str1, str2){
    if(str1.length !== str2.length) return false;

    const arr1= [...str1].sort();
    const arr2= [...str2].sort();
    for(let i = 0; i<str1.length;i++){
        if(arr1[i] != arr2[i])return false
    }
    return true
}

const str1 = "nine";
const str2 = "nein";

console.log(areAnagrams(str1,str2))