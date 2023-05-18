//Implement insert and delete operations on an BST

class Node{
    constructor(element) {
       this.left = null;
       this.right = null;
       this.data = element;
    }
}
function treeInsert(val){
    root = insertOnTree(root, val)
}
function insertOnTree(root, val){
    if(!root){
        return new Node(val)
    }

    if(val > root.data){
        root.right = insertOnTree(root.right,val)
    }else if(val < root.data){
        root.left = insertOnTree(root.left,val)
    }

    return root;
}

function treeDelete(val){
    root = deleteOnTree(root, val)
}
function deleteOnTree(root, val){
    if (!root){
        return root;
    }
    if(val < root.data){
        root.left = deleteOnTree(root.left, val)
    }else if(val > root.data){
        root.right = deleteOnTree(root.right, val)
    }else{
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }

        root.data = getMinValue(root.right);

        root.right = deleteOnTree(root.right, root.data)

    }

    return root
            
}

function getMinValue(root){
    while(root.left){
        root = root.left
    }

    return root.data
}

function printTopToBottom(tree){
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
    printTopOrder(tree)
    console.log(str) 
 }


let root = null
treeInsert(10)
treeInsert(5)
treeInsert(4)
// treeInsert(20)
// treeInsert(5)
// treeInsert(15)
// treeInsert(7)
// treeInsert(25)
// treeInsert(30)
// treeInsert(1)
// treeInsert(6)
console.log(root)
printTopToBottom(root)

// treeDelete(6)
// console.log(root)
// printTopToBottom(root)

// treeDelete(25)
// console.log(root)
// printTopToBottom(root)

// treeDelete(5)
// console.log(root)
// printTopToBottom(root)


