//Implement the rebalancing algorithm for an AVL tree

class Node{
    constructor(element) {
       this.left = null;
       this.right = null;
       this.data = element;
       this.height = 1;
    }
}
function treeInsert(val){
    root = insertAndBalance(root, val)
}
function insertAndBalance(root, val){
    if(!root){
        return new Node(val)
    }

    if(val > root.data){
        root.right = insertAndBalance(root.right,val)
    }else if(val < root.data){
        root.left = insertAndBalance(root.left,val)
    }else{
        return root
    }

    root.height = Math.max(getHeight(root.left), getHeight(root.right))+1;

   
    let balance = balanceFactor(root);

    if(balance < -1 && val > root.right.data){
        return rotateLeft(root)
    }else if(balance < -1 && val < root.right.data){
        root.right = rotateRight(root.right)
        return rotateLeft(root)
    }else if(balance > 1 && val < root.left.data){
        return rotateRight(root)
    }else if( balance > 1 && val > root.left.data){
        root.left = rotateLeft(root.left)
        return rotateRight(root)
    }
   
    return root;
}
function minValueNode(node){
        let current = node;
        while (current.left != null)
            current = current.left;
   
        return current;
}
function getHeight(node){
    if (!node){
        return 0
    }

    return node.height
}
function balanceFactor(node){
    if (node == null){
       return 0;
    }else{
       return getHeight(node.left)- getHeight(node.right);
    }      
}
function rotateRight(a){
    let b = a.left;
    let T2 = b.right;

   
    b.right = a;
    a.left = T2;

    a.height = Math.max(getHeight(a.left), getHeight(a.right)) + 1;
    b.height = Math.max(getHeight(b.left),getHeight(b.right)) + 1;

    return b;
}
function rotateLeft(b){
    let a = b.right;
    let T2 = a.left;

    a.left = b;
    b.right = T2;
    

    b.height = Math.max(getHeight(b.left),getHeight(b.right)) + 1;
    a.height = Math.max(getHeight(a.left), getHeight(a.right)) + 1;
    

    return a;
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

let root = null;
treeInsert(15);
treeInsert(5);
treeInsert(3);
treeInsert(1);
treeInsert(2);

printTopToBottom(root)

root = null;
treeInsert(10);
treeInsert(4);
treeInsert(15);
treeInsert(5);
treeInsert(3);
treeInsert(1);
treeInsert(16);
treeInsert(19);

printTopToBottom(root)

