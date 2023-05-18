// Create a priority queue using the heap tree structure

class PriorityQueue{
    constructor(){
        this.q = [];
    }

    shiftUp(){
        let index = this.q.length - 1;
        let parentIndex = this.getParentIndex(index);
        while(this.q[index] > this.q[parentIndex]){
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex= this.getParentIndex(index);
        }
    }

    shiftDown(index){
        let maxIndex = index;

        let lIndex = this.getLChildIndex(index);
        if(lIndex < this.q.length && this.q[maxIndex] < this.q[lIndex]){
            maxIndex = lIndex;
        }

        let rIndex = this.getRChildIndex(index);
        if(rIndex < this.q.length && this.q[maxIndex] < this.q[rIndex]){
            maxIndex = rIndex;
        }

        if (index != maxIndex) {
            this.swap(index, maxIndex);
            this.shiftDown(maxIndex);
        }

    }

    enqueue(value){
        this.q.push(value);
        this.shiftUp();
    }

    dequeue(){
        if (this.q.length == 0){
            return null
        }
        let res = this.q[0];
        this.q[0] = this.q.pop();

        this.shiftDown(0);
        return res
        

    }

    getParentIndex(index){
        if(index <= 2){
            return 0
        }
        return Math.ceil((index/2)-1)
    }

    getLChildIndex(index){ 
        return Math.floor(2*index+1);
    }

    getRChildIndex(index){
        
        return Math.floor(2*index+1);
    }

    swap(index1, index2){
        let temp = this.q[index1];
        this.q[index1] = this.q[index2];
        this.q[index2] = temp;

    }
}

const pq = new PriorityQueue();

pq.enqueue(10)
pq.enqueue(5)
pq.enqueue(3)
pq.enqueue(2)
pq.enqueue(11)

console.log(pq)

console.log(pq.dequeue());

console.log(pq)
