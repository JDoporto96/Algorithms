//Implement a priority queue with a linked list

class Node {
    constructor(data,priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

class PrioQueue {
    constructor() {
      this.head = null;
      this.length=0;
    }

    push(data,priority){
        let node = new Node(data,priority);
        this.length++;

        if(!this.head){
            this.head = node;
            return
        }

        if(node.priority > this.head.priority){
            node.next = this.head;
            this.head = node;
        }else{
            let temp = this.head;
            while(temp && temp.next && temp.next.priority > node.priority){
                temp = temp.next;
            }

            node.next = temp.next;
            temp.next = node;

        }

    }

    pop(){
        if(!this.head){
            return
        }else{
            this.length--;
            let temp = this.head;
            this.head = temp.next
            return temp;
        }
        
    }

    peek(){
        return this.head.data;
    }

    printQueue(){
        const list =[];
        let h = this.head;
        while(h){
            list.push(h.data);
            h = h.next
        }
        console.log(list)
    }
}

const q = new PrioQueue();

q.printQueue();
console.log(q.length);

q.push("lowest priority",1)
q.push("is",8)
q.push("this",10)
q.push("the",3)

q.printQueue();
console.log(q.length);

console.log(q.peek())

console.log(q.pop())

q.printQueue();
console.log(q.length);