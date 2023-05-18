// Represent a graph in an adjacency matrix and as a list of nodes

class Graph {
    constructor(vertex) {
        this.v = vertex;
        this.adjM = new Array(this.v).fill().map(()=>new Array(this.v).fill(0))
        this.nodeList = new Array(this.v).fill().map(()=>new Node());
    }

    addEdge(from, to){
        if(from >= this.v || to >= this.v){
            throw new Error("Vertex count starts from 0. Insuficient space on graph")
        }

        if(this.adjM[from][to] == 0){
            this.adjM[from][to] = 1;
        }

        const node = this.nodeList[from];
        node.children.push(to)
    }



}

class Node {
    constructor(){
        this.children =[];
    }
    
}

const g = new Graph(4);
g.addEdge(0,2)
g.addEdge(0,1)
g.addEdge(1,2)
g.addEdge(2,3)
g.addEdge(3,1)
const adjRepresentation = g.adjM;
console.log( adjRepresentation)

const nodeLRepresentation = g.nodeList;
console.log( nodeLRepresentation)