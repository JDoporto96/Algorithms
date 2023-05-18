//Find the k-th to last node of a singly linked list.


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



function getKNode(head, k){
    let ref = head;
    let pointer=head;
    let i = 0;
    while(i<k){
        if(!ref){
            throw new Error("k must be lower than the list length")
        }

        ref = ref.next;
        i++;
    }

    while(ref){
        ref =ref.next;
        pointer = pointer.next;
    }

    return pointer

}

console.log(getKNode(head, 2))