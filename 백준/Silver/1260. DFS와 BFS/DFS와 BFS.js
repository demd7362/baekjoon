const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())
const initGraph = (linkedInfo,isDfs) => {
    const graph = {};
    for (const info of linkedInfo) {
        const [target, linked] = info.split(' ').map(Number);
        graph[target] = graph[target] ? [...graph[target], linked] : [linked];
        graph[linked] = graph[linked] ? [...graph[linked], target] : [target];
    }
    Object.values(graph).forEach(neighbors => neighbors.sort((a, b) => isDfs ? b - a : a - b));
    return graph;
}

function dfs(graph,start) {
    const visited = [];
    const stack = [start];
    while(stack.length > 0){
        const node = stack.pop();
        if(visited.includes(node)) continue;
        visited.push(node);
        const joinNodes = graph[node] ?? [];
        for(const joinNode of joinNodes){
            if(visited.includes(joinNode)) continue;
            stack.push(joinNode);
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
let dfsResult = dfs(initGraph(rest,true),start);
console.log(dfsResult.join(' '))
let bfsResult = bfs(initGraph(rest,false),start);
console.log(bfsResult.join(' '))