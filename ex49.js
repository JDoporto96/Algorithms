//ICPC 2007 Problem A - Consanguine Calculations

const bloodChart ={
    "type":{
        "A":["A","O"],
        "B":["B","O"],
        "AB":["A","B"],
        "O":["O"]
    },
    "rh":{
        "+":["+", "-"],
        "-":["-"]
    }
}

function consanguineCalc(input){
    const inputArr = input.split(" ");
    const bloodArr = inputArr.filter(el => el!="?");
    if(inputArr.indexOf("?") == 2){
       return findChild(...bloodArr)
    }else{
       return findParent(...bloodArr)
    }
}

function findParent(p1, child){
    const pBlood = {};
    const cBlood = {};

    pBlood.rh = p1.at(-1);
    pBlood.type = p1.substr(0,p1.length -1);
    cBlood.rh = child.at(-1);
    cBlood.type = child.substr(0,child.length -1);

    
    const res = getParentBlood(pBlood, cBlood);
    const str = `${p1} ${res} ${child}`;
    return str;
}

function findChild(parent1, parent2){
    const blood1 = {};
    const blood2 = {};

    blood1.rh = parent1.at(-1);
    blood1.type = parent1.substr(0,parent1.length -1);
    blood2.rh = parent2.at(-1);
    blood2.type = parent2.substr(0,parent2.length -1);
    
    const typeComb = getCombinations(bloodChart.type[blood1.type], bloodChart.type[blood2.type]);
    const rhComb = getCombinations(bloodChart.rh[blood1.rh], bloodChart.rh[blood2.rh]);

    for(let i =0; i<typeComb.length; i++){
        typeComb[i]=reduceCombination(typeComb[i]);
    }

    for(let i =0; i<rhComb.length; i++){
       rhComb[i]=reduceCombination(rhComb[i]);
    }

    const res = getCombinations(typeComb, rhComb,false).join(", ");
    const str = `${parent1} ${parent2} {${res}}`;
    return str;
   
}
function getParentBlood(pBlood, cBlood){
    let typePosibilities=["A","B","AB","O"];
    let rhPosibilities=["+","-"];

    if(cBlood.type == "O"){
        if (pBlood.type == "AB"){
            return "IMPOSSIBLE"
        }else{
            typePosibilities = typePosibilities.filter(el=> el!="AB");
        }
       
    }else if(cBlood.type =="AB"){
        typePosibilities=typePosibilities.filter(el=>el!="O");

        if(pBlood.type =="O"){
            return "IMPOSSIBLE"
        }else if(pBlood.type !="AB"){
            typePosibilities=typePosibilities.filter(el=>el!=pBlood.type);
        }
    }else{
        if(!pBlood.type.includes(cBlood.type)){
            typePosibilities = typePosibilities.filter(el => el.includes(cBlood.type))
        }
    }

    if(cBlood.rh =="+" && pBlood.rh =="-"){
        rhPosibilities= rhPosibilities.filter(el =>el!="-")
    }

    return `{${getCombinations(typePosibilities, rhPosibilities,false).join(", ")}}`

}
function getCombinations(arr1, arr2, sorted=true){
    const combinations =[];
    for(let i =0; i< arr1.length;i++){
        for(let j =0; j< arr2.length;j++){
            let pair = arr1[i]+arr2[j];
            if(!combinations.includes(sorted?pair.split('').sort().join(''):pair)){
                combinations.push(sorted?pair.split('').sort().join(''):pair)
            }
        }

    }
    return combinations
}
function reduceCombination(str){
    if(str.at(-1)=="O" || str.at(-1)=="-"){
       return str.at(0);
    }else if(str.at(0)== str.at(-1)){
        return(str.at(0))
    }else if(str=="AB"){
        return str;
    }
}

const input = "A- ? O+";
const output = consanguineCalc(input);
console.log(output)
