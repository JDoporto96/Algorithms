//Find the inner-most cyles in a graph


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
        // this.adjList[to].push(from);
    }
}

function getCylces(graph){
   

    function dfs(u, p, color, par){

        if (color[u] == 2) return;
    
        if (color[u] == 1){

            const v = [];
            let cur = p;
            v.push(cur);

            while (cur != u){
                cur = par[cur];
                v.push(cur);
            }

            cycles[cyclenumber] = v;
            cyclenumber++;
            return;
        }

        par[u] = p;
        color[u] = 1;

    
        for(var v of graph.adjList[u]){
            dfs(v, u, color,par);
        }

        color[u] = 2;
    }

    let cycles = Array.from(Array(graph.v), ()=>Array());
    let cyclenumber = 0;
    const color = Array(graph.v).fill(0);
    const par = Array(graph.v).fill(0);
  
    dfs(3, 0, color,par);

    for(let i =0; i<cyclenumber; i++){
        console.log(cycles[i])
    }
}


const g = new Graph(7)

g.addEdge(0,1);
g.addEdge(1,3);
g.addEdge(1,2);
g.addEdge(2,0);

g.addEdge(3,4);
g.addEdge(4,5);
g.addEdge(5,3);

g.addEdge(2,6);
g.addEdge(5,2);
g.addEdge(6,5);

getCylces(g);




