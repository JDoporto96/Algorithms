//Find the node at the beginning of a loop in a singly linked list

class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

function findStartOfLoop( head) {
    if (!head  || !head.next) return null;
    let slow = head;
    let fast = head;

    slow = slow.next;
    fast = fast.next.next;

    while (fast && fast.next){
        if (slow == fast) break;

        slow = slow.next;
        fast = fast.next.next;
    }

    if (slow != fast) return null;

    slow = head;
    while(slow != fast){
        slow = slow.next;
        fast = fast.next;
    }

    return slow
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

head.next.next.next.next.next.next.next.next.next = head.next.next.next;


console.log(findStartOfLoop(head))
