// Implement merge sort for linked lists

class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}



function getMiddleNode(head){
    if (!head  || !head.next) return null;
    let slow = head;
    let fast = head.next;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow
}

function merge(a,b){
    let res = null;

    if(!a){
        return b
    }
    if(!b){
        return a
    }

    if(a.key <= b.key ){
        res = a;
        res.next = merge(a.next,b)
    }else{
        res = b;
        res.next = merge(a,b.next)
    }
    return res
}

function mergeSort(h){
    if(!h || !h.next){
        return h;
    }
   

    let middle = getMiddleNode(h);
   
    let h2 = middle.next;
    
    middle.next = null;

    let left = mergeSort(h);

    let right = mergeSort(h2);

    let sorted = merge(left, right);

    return sorted

}

function printList(h){
    const list =[];
    while(h){
        list.push(h.key);
        h = h.next
    }
    console.log(list)
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next.next.next = new Node(1);


printList(head)
const sortedList = mergeSort(head)
printList(sortedList)