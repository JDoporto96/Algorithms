//Implement searching in an AVL tree
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

function search(root, val){
    if (!root){
        return false;
    }else if(root.data == val){
        return root
    }
    if(root.data < val){
        return search(root.right,val)
    }else if(root.data > val){
        return search(root.left,val)
    }
}

let root = null
treeInsert(10)
treeInsert(20)
treeInsert(5)
treeInsert(15)
treeInsert(7)
treeInsert(25)
treeInsert(30)
treeInsert(1)
treeInsert(6)

let output = search(root, 100)
console.log( output)