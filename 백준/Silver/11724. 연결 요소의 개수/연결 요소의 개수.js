const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());

function solution([NM, ...args]) {
    const [N, M] = NM.split(' ').map(Number);
    let graph = {};
    for (let i = 1; i <= N; i++) {
        graph[i] = []; 
    }
    args.forEach(arg => {
        const [u, v] = arg.split(' ').map(Number);
        graph[u].push(v);
        graph[v].push(u);
    })
    const visited = Array(N + 1).fill(false);

    const bfs = (startNode) => {
        let front = 0;
        const queue =  [startNode];
        visited[startNode] = true;
        while (queue.length > 0 && front < queue.length) {
            const node = queue[front++];
            const joinNodes = graph[node] ?? [];
            for (const joinNode of joinNodes) {
                if (!visited[joinNode]) {
                    visited[joinNode] = true;
                    queue.push(joinNode);
                }
            }
        }
    }
    
    let count = 0;
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            bfs(i);
            count++;
        }
    }
    console.log(count);
}

solution(input);
