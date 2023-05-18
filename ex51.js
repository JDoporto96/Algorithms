//Lowest Common Ancestor (LCA)

class Node{
    constructor(data) {
       this.left = null;
       this.right = null;
       this.value= data;
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

// ** Tree:
// *              A
// *            /   \
// *           B     C
// *         /  \   /  \
// *        D    E F    G
// *              / \    \
// *             H   I    J
// */
const bTree = '(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))';
const root= parseTree(bTree);

let path1 = [];
let path2 = [];

function findLCA(root, n1, n2) {

    if (!findPath(root, n1, path1) || !findPath(root, n2, path2))
    {
        console.log((path1.length > 0) ?
        "n1 is present" : "n1 is missing");
        console.log((path2.length > 0) ?
        "n2 is present" : "n2 is missing");
        return -1;
    }

    let i;
    for (i = 0; i < path1.length && i < path2.length; i++) {
          
        if (path1[i] != path2[i])
            break;
    }

    return path1[i-1];
}

function findPath(root, n, path)
{

    if (root == null) {
        return false;
    }
      
    path.push(root.value);

    if (root.value == n) {
        return true;
    }

    if (root.left != null && findPath(root.left, n, path)) {
        return true;
    }

    if (root.right != null && findPath(root.right, n, path)) {
        return true;
    }

    path.pop();

    return false;
}


console.log(findLCA(root,"G", "D"))