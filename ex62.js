//Topological Sort (DAG-algorithm)


class Graph {
    constructor(vertex) {
        this.v = vertex;
        this.graph = new Map();
    }

    addEdge(from, to){

        if(from >= this.v || to >= this.v){
            throw new Error("Vertex count starts from 0. Insuficient space on graph")
        }
        

        if(this.graph.get(from) === undefined) {
            this.graph.set(from, [to]);

        }else{
            const arr = this.graph.get(from);
            arr.push(to);
            this.graph.set(from, arr);
        }

    }

    topologicalSort(){
        let str="";
        let stk = [];
        let visited = new Array(this.v).fill(false);

        for (let i = 0 ; i < this.v ; i++){
            if (visited[i] == false){
                this.visitUtil(i, visited, stk);
            }
        }
  
        while (stk.length != 0){
            str += stk.pop()+" "
        }

        return str
    }

    visitUtil(item, visited, stk)
    {
        visited[item] = true;

        const itemArr = this.graph.get(item)==undefined? [] : this.graph.get(item);
        for(let i = 0 ; i < itemArr.length ; i++){
            if(!visited[itemArr[i]]){
                this.visitUtil(itemArr[i], visited, stk)
            }
        }

        stk.push(item);
    }
}

const g = new Graph(6);

g.addEdge(5, 2)
g.addEdge(5, 0)
g.addEdge(4, 0)
g.addEdge(4, 1)
g.addEdge(2, 3)
g.addEdge(3, 1)
console.log(g.graph)

const output = g.topologicalSort();
console.log(output)

