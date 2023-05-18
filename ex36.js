//Reverse a Linked List

function reverseList(h){
    if(!h || !h.next ){
        return h
    }

    let main = h;
    let prev = null;
    let temp = null;

   
    while(main){
        temp = main.next;
        main.next = prev;
        prev = main;
        main = temp
    }

    h=prev;
    return h
}

function printList(h){
    const list =[];
    while(h){
        list.push(h.key);
        h = h.next
    }
    console.log(list)
}

class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(7);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(6);
head.next.next.next.next.next = new Node(3);
head.next.next.next.next.next.next = new Node(5);
head.next.next.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next.next.next = new Node(1);

printList(head);

const reversed = reverseList(head);

printList(reversed)
