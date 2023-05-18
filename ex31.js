//Find the middle node of a single linked list.

class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
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

console.log(getMiddleNode(head))
    
