//Determine if a tree is mirrored 
const aTree= "(1,(2,(3),(4,(5),)),(2,(4,,(5)),(3)))"
const bTree= "(1,(2,(3),(4,(5),)),(2,(3,,(5)),(4)))"

class Node{
    constructor(element) {
       this.left = null;
       this.right = null;
       this.data = element;
    }
}


function parseTree(stringT){
   if(stringT == "") return null;
   let index = -1;

   function getValue(){
      let value="";
      while(stringT[index] != ")" && stringT[index]!=","){
         if (stringT[index] == "(") {
            throw new Error(`Unexpected ${stringT[index]} at position ${index} on string`);
          }
         value+= stringT[index];
         index++;
      }
      return value;
   }
   function createNode(){
      index++;
      let root;

      if(stringT[index]==")" || stringT[index]=="," ){
         return null
      }else if(stringT[index]=="("){
         index++;
         root = new Node(getValue());
         
      }else{
         throw new Error(`Unexpected token at position ${index} of string`)
      }

      if(stringT[index]==")"){
         index++;
         return root;
      }

      root.left = createNode();

      if (stringT[index] == ")") {
         index++;
         return root;
      }
   
      
      root.right = createNode();
      if (stringT[index] != ")") {
         throw new Error(`) was expected at end of string`);
      }

      index++;
   
      return root;


   }

   const tree = createNode();

   return tree
}


function isMirrored(root1, root2){
    if(root1 == null && root2 == null){
       return true
    }else if(root1 ==null || root2 == null){
       return false
    }else{
       return (
          root1.data === root2.data &&
          isMirrored(root1.left, root2.right) &&
          isMirrored(root1.right, root2.left)
       )
    }
 
}

function isTreeMirrored(root){
    return isMirrored(root.left, root.right)
}

let input = parseTree(aTree);
let output = isTreeMirrored(input);

console.log(output);

input = parseTree(bTree);
output = isTreeMirrored(input);

console.log(output)