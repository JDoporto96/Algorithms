//Implement a circular queue

class Node {
    constructor() {
      this.data;
      this.node;
    }
}

class Queue {
    constructor() {
      this.front;
      this.back;
      this.length=0;
    }

    enQueue(value){
        let node = new Node();
        node.data = value;

        this.length++;

        if(!this.front){
            this.front = node
        }else{
           this.back.next = node;
        }
 
        this.back = node;
        this.back.next = this.front;
    }

    deQueue(){
        if(!this.front){
            return "Queue is already empty"
        }

        let node;
        this.length--;

        if(this.front === this.back){
            node = this.front
            this.front = null;
            this.back = null;
        }else{
            node = this.front;
            this.front = this.front.next;
            this.back.next = this.front
        }
        return node

    }

    showQueue(){
        if(!this.front){
           console.log("No elements in queue")
           return
        }
        let node = this.front;
        console.log("Elements in queue: ")
        while(node.next != this.front){
            console.log(node)
            node=node.next
        }
        console.log(node)
    }
}

const q = new Queue();

q.showQueue();
q.enQueue(1)
q.showQueue();
q.enQueue(2)
q.enQueue(3)
q.showQueue();

q.deQueue();
q.showQueue();

q.deQueue();
q.deQueue();

q.showQueue();
