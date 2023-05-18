//Given a single linked list as input, Determine if the contents is a palindrome.

class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

function isListPalindrome(h){
    const stk =[];
    let temp = h;

    while(temp){
        stk.push(temp.key);
        temp=temp.next;
    }

    while(h){
        let item = stk.pop();
        if(h.key != item){
            return false
        }
        h=h.next
    }
    return true


}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(7);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(6);
head.next.next.next.next.next = new Node(3);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next.next.next = new Node(1);


console.log(isListPalindrome(head))