//Determine if a string is a rotation of another

function isRotation(str1, str2){
    if(str1.length !== str2.length) return false;

    const temp = str1+str1;
    
    return (temp.indexOf(str2) != -1)

}

const str1="one";
const str2="eon";

const str3="eno"

console.log(isRotation(str1,str2))
console.log(isRotation(str1,str3))