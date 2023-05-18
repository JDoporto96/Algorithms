//AMC ICPC 2017 - problem I: Chamber of Secrets
class Graph {
    constructor(data){
        this.nodes = data
        this.v = data.length;
        this.adj = new Array(this.v).fill().map(()=>new Array())
        
    }

    addEdge(from, to){
        const fromIndex = this.nodes.indexOf(from);
        const toIndex = this.nodes.indexOf(to)

        this.adj[fromIndex].push(toIndex)
    }

    areConnected(start,end){
        const visited = new Array(this.v).fill(false);
        const q= [];
    
        let startIndex = this.nodes.indexOf(start);
        let endIndex = this.nodes.indexOf(end);

        if(startIndex == -1 || endIndex ==-1){
            return false
        }

        visited[startIndex] = true;
        q.push(startIndex);
    
        while (q.length != 0){
            let n = q.shift();   
            if(n == endIndex)
                return true;
            for(let i = 0; i < this.adj[n].length; i++){
                if (visited[this.adj[n][i]] == false){
                    q.push(this.adj[n][i]);
                    visited[this.adj[n][i]] = true;
                }
            }
                
        }

        return false;
    }

}

function parseInput(str){
    return str.replace(/[\r\n]/gm, ' ').split(" ")
}

function createGraph(arr){
    const translations = Number(arr[0]);
    let transArr = arr.slice(2, (translations)*2 +2);
    transArr = transArr.filter((el,index) => transArr.indexOf(el)===index);
    const g = new Graph(transArr);

    for(let i=1;i<=translations; i++){
       
        g.addEdge(arr[i*2],arr[(i*2)+1])
    }

    return g;
}

function isTranslatable(graph,str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    for(let i = 0; i<str1.length;i++){
        if(!(str1[i] == str2[i] || graph.areConnected(str1[i], str2[i]))){
            return false
        } 
    }
    return true

    
}

function chamberOfSecrets(input){
    const inputArr = parseInput(input);
    const g = createGraph(inputArr)
    const wordsIndex = (Number(inputArr[0])+1)*2
    const checksArr = inputArr.slice(wordsIndex, wordsIndex+Number(inputArr[1]*2))
    
    for(let i = 0; i<Number(inputArr[1]);i++){
        if(isTranslatable(g,checksArr[i*2], checksArr[(i*2)+1])){
            console.log("yes")
        }else{
            console.log("no")
        }
    }
    return g
}
const input = 
`9 5
c t
i r
k p
o c
r o
t e
t f
u h
w p
we we
can the
work people
it of
out the
`

const input2 =`3 3
a c
b a
a b
aaa abc
abc aaa
acm bcm`

console.log("input:")
console.log("")
chamberOfSecrets(input)
console.log("")
console.log("input2:")
console.log("")
chamberOfSecrets(input2)
