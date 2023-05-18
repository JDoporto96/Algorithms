// Sweep line algorithm. Find the intersections of horizontal and vertical lines
	
class Node{
	constructor(d){
		this.left = null;
		this.right = null;
		this.data = d;
		this.height = 1;
	}
}
	
let root;

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

function insert(root, val){
    if(!root){
        return new Node(val)
    }

    if(val > root.data){
        root.right = insert(root.right,val)
    }else if(val < root.data){
        root.left = insert(root.left,val)
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

function deleteNode(root, key){

	if (root == null) return root;

	if (key < root.data) root.left = deleteNode(root.left, key);
	
	else if (key > root.data) root.right = deleteNode(root.right, key);
	
	else{

		if ((root.left == null) || (root.right == null)){
			let temp = null;
			if (temp == root.left) temp = root.right;
			else temp = root.left;

			if (temp == null){
				temp = root;
				root = null;
			}else root = temp; 

		}else{
			let temp = minValueNode(root.right);

			root.data = temp.data;

			root.right = deleteNode(root.right, temp.data);
		}
	}

		
	if (root == null) return root;

    root.height = Math.max(getHeight(root.left), getHeight(root.right)) + 1;

    let balance = balanceFactor(root);

	
	if (balance > 1 && balanceFactor(root.left) >= 0)return rotateRight(root);


	if (balance > 1 && balanceFactor(root.left) < 0){
		root.left = rotateLeft(root.left);
		return rotateRight(root);
	}

		
	if (balance < -1 && balanceFactor(root.right) <= 0)return rotateLeft(root);

		
	if (balance < -1 && balanceFactor(root.right) > 0){
		root.right = rotateRight(root.right);
		return rotateLeft(root);
	}

	return root;
}

function rangeSearch(root,min,max){
    const validKeys=[];
    function recursiveSearch(root, min, max){
        if(!root) return root;
        if(root.data < min){
            recursiveSearch(root.right,min, max);
        }else if( root.data > max){
            recursiveSearch(root.left,min, max);
        }else{
            validKeys.push(root.data);
            recursiveSearch(root.right,min, max);
            recursiveSearch(root.left,min, max);
        }
    }
    recursiveSearch(root,min,max);
    return validKeys;
}




// const segments = [
//     [[0, 1], [6, 1]],
//     [[1, 2], [6, 2]],
//     [[2, 3], [3, 3]],
//     [[1, 5], [6, 5]],
//     [[4, 1], [4, 4]],
//     [[5, 4], [5, 6]],

// ]

const segments = {
    "horizontal":[
        [[0, -1], [8, -1]],
        [[1, 1], [6, 1]],
        [[2, 5], [9, 5]],
        [[3, 2], [6, 2]],
        [[6,3], [12, 3]],
        [[8,1], [13, 1]]
    ],
    "vertical":[
        [[2, 4], [2, 6]],
        [[7,-2], [7,4]],
    ]
    
    
    }

function getIntersections(segments){
    let bst = null;
    const intersections = [];
    const sweep = getSweepPoints(segments);
    function eventOccur(segments,x){
        for (let seg of segments){
            if(seg[0][0] == x && seg[1][0] == x){
                const int = rangeSearch(bst,seg[0][1], seg[1][1])
                for(let y of int){
                    intersections.push([x,y])
                }
            }else if(seg[0][0] == x){
                const y = seg[0][1];
                bst = insert(bst,y)
            }else if(seg[1][0] == x ){
                const y = seg[1][1];
                bst = deleteNode(bst,y)
            }
        }
    }

    for(let x of sweep){
        eventOccur(segments.horizontal.filter(seg => (seg[0][0] == x || seg[1][0] == x)),x)
        eventOccur(segments.vertical.filter(seg => (seg[0][0] == x || seg[1][0] == x)),x)  
    }

    return intersections

}

function getSweepPoints(segments){
    const arr = [];
    for(let dir in segments){
        for(let seg of segments[dir]){
            const x1 = seg[0][0];
            if(!arr.includes(x1)){
                arr.push(x1)
            }
            const x2 = seg[1][0];
            if(!arr.includes(x2)){
                arr.push(x2)
            }
        }    
    }
    return arr.sort((a,b) => a-b);
}


console.log(getIntersections(segments))
