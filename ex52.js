//Given a binary tree, print out the nodes in order of top-to-bottm, and left-to-right

class Node
{
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

function printLeftToRight(tree){
   const parsedTree = parseTree(tree); 
   let str='';
   function printInorder(node){
      if (node == null || node.data ==" ")
          return;
      printInorder(node.left);
   
      str+=(node.data+" ")
      
      printInorder(node.right);
    }
    printInorder(parsedTree);
   console.log(str) 
}


function printTopToBottom(tree){
    const parsedTree = parseTree(tree); 
    let str='';
    const q =[];
    function printTopOrder(node){
        if(node != null){
            str+= node.data+" ";
        }
        if(node.left != null){
            q.push(node.left);
        }
        if(node.right != null){
            q.push(node.right)
        }
        while(q.length>0){
            let node = q.shift();
            printTopOrder(node);
        }
        
    }
    printTopOrder(parsedTree)
    console.log(str) 
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

printLeftToRight(bTree)
printTopToBottom(bTree)