//Given the root of a tree, write a function that takes two numbers (n1 and n2). 
//Search for these two numbers within the tree and indicate if they are found at the same depth.

class Node{
    constructor(element) {
       this.value = element;
       this.children=[];
    }
}

let root = new Node(0)
root.children.push(new Node(1))
root.children.push(new Node(2))
    root.children[1].children.push(new Node(1))
    root.children[1].children.push(new Node(5))
        root.children[1].children[1].children.push(new Node(3))
        root.children[1].children[1].children.push(new Node(5))
            root.children[1].children[1].children[1].children.push(new Node(6))
        root.children[1].children[1].children.push(new Node(9))
root.children.push(new Node(3))
root.children[2].children.push(new Node(0))
root.children.push(new Node(5))
root.children.push(new Node(7))
    root.children[4].children.push(new Node(3))
        root.children[4].children[0].children.push(new Node(3))
        root.children[4].children[0].children.push(new Node(0))
            root.children[4].children[0].children[1].children.push(new Node(9))
            root.children[4].children[0].children[1].children.push(new Node(4))


function isSameLevel(tree, n1, n2){ 
    if(!tree){
        return false
    }

    const getLevels = (root) =>{
        const M = {};
        
        let q =[];
        q.push(root);
        let lvl =1;
    
        while(q.length!=0){
            
            let stack = [];
            let tempArr=[];
            while(q.length!=0){
                let node = q.shift();
                tempArr.push(node.value)
                node.children.forEach(child => {
                    stack.push(child)
                });
            }
            q=stack;
    
            M[lvl]=tempArr;
            lvl++;
        }
    
        return M
    }
   
    const treeLvls = getLevels(tree)

    for(prop in treeLvls){
        if(n1!=n2){
            if (treeLvls[prop].includes(n1) && treeLvls[prop].includes(n2)){
                return true
            }
        }else{
            if(treeLvls[prop].filter(el=>el===n1).length > 1){
                return true
            }
        }
       
    }

    return false
    
}

console.log(isSameLevel(root, 9,3))
console.log(isSameLevel(root, 9,1))