// Flatten an array, Recursive and iterative implementation
// const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]]
const input = [1,2,[,3]]

export function flattenArray(input){
    if (!Array.isArray(input)) {
        return input;
    }
    const flat = [];

    input.forEach(el => {
        if (Array.isArray(el)) {
        flat.push(...flattenArray(el));
        } else {
        flat.push(el);
        }
    });

    return flat;
};


function flattenArrayIt(arr){
    let i = 0;
    const flat=[];

    if (!Array.isArray(arr)) {
        return arr;
    }

    while (i < arr.length) { 
        if (Array.isArray(arr[i])) {
            flat.concat(arr.splice(i, 1, ...arr[i].filter(Boolean)));
        }else {
            flat.push(arr[i])
            i++;
        }
    }

    return flat;
}


console.log(flattenArray(input));

console.log(flattenArrayIt(input))
