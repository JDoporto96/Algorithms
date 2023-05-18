// Implement shortest path algorithm for unweighted graphs. BFS approach


class Graph {
    constructor(vertex) {
        this.v = vertex;
        this.adjList = new Array(this.v).fill().map(()=> new Array());
    }

    addEdge(from, to){
        if(from >= this.v || to >= this.v){
            throw new Error("Vertex count starts from 0. Insuficient space on graph")
        }

        this.adjList[from].push(to);
        this.adjList[to].push(from);
    

    }
    
    getShortestDistance(start, end){
    
        const previous = new Array(this.v).fill(null);
        const distance = new Array(this.v).fill(Infinity);
    
        if (BFS(this.adjList, start, end, this.v, previous, distance) == false) {
            return null;
        }
    
        
        const path = [];
        let step = end;
        path.push(step);
        while (previous[step]!= null) {
            path.push(previous[step]);
            step = previous[step];
        }

        return path.reverse();
 

    }

}

function BFS(src, start, end, vertex, previous, distance){
    const q = [];
    const visited = new Array(vertex).fill(false);
    
    visited[start] = true;
    distance[start] = 0;
    q.push(start);
 
    while (q.length > 0) {
        let u = q.shift();;
        for (let i = 0; i < src[u].length; i++) {
            if (visited[src[u][i]] == false) {
                visited[src[u][i]] = true;
                distance[src[u][i]] = distance[u] + 1;
                previous[src[u][i]] = u;
                q.push(src[u][i]);
 
               
                if (src[u][i] == end)
                    return true;
            }
        }
    }
 
    return false;

}

const g = new Graph(8)
g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(1, 2);
g.addEdge(3, 4);
g.addEdge(3, 7);
g.addEdge(4, 5);
g.addEdge(4, 6);
g.addEdge(4, 7);
g.addEdge(5, 6);
g.addEdge(6, 7);

console.log(g.getShortestDistance(0,7))

