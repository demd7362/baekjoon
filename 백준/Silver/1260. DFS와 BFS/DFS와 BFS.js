const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())
const initGraph = (linkedInfo) => {
    const graph = {};
    for (const info of linkedInfo) {
        const [target, linked] = info.split(' ').map(Number);
        graph[target] = graph[target] ? [...graph[target], linked] : [linked];
        graph[linked] = graph[linked] ? [...graph[linked], target] : [target];
    }
    
    Object.values(graph).forEach(node => node.sort((a,b) => a - b));
    return graph;
}

function dfs(graph,node,visited = []) {
    if(!visited.includes(node)){
        visited.push(node);
        const joinNodes = graph[node] ?? [];
        for(const joinNode of joinNodes){
            if(!visited.includes(joinNode)){
                dfs(graph,joinNode,visited);
            }
        }
    }
    return visited;
}
function bfs(graph,start){
    const visited = [];
    const queue = [start];
    while(queue.length > 0){
        const node = queue.shift();
        if(visited.includes(node)) continue;
        visited.push(node);
        const joinNodes = graph[node] ?? [];
        for(const joinNode of joinNodes){
            if(visited.includes(joinNode)) continue;
            queue.push(joinNode);
        }
    }
    return visited;
}

let [graphInfo, ...rest] = input;
const [vertex, edge, start] = graphInfo.split(' ').map(Number);
const graph = initGraph(rest);
let dfsResult = dfs(graph,start);
console.log(dfsResult.join(' '))
let bfsResult = bfs(graph,start);
console.log(bfsResult.join(' '))

