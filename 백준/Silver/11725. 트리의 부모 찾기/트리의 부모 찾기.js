const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n, ...args]) {
    n = Number(n);
    const graph = {};
    for (const arg of args) {
        const [line1, line2] = arg.split(' ').map(Number);
        graph[line1] = [...graph[line1] ?? [], line2];
        graph[line2] = [...graph[line2] ?? [], line1];
    }
    const parentNodes = Array(n + 1).fill(0);
    const visited = Array(n + 1).fill(false);
    const bfs = (startNode) => {
        const queue = [startNode];
        visited[startNode] = true;
        while (queue.length > 0) {
            const node = queue.shift();
            const joinNodes = graph[node] || [];
            for (const joinNode of joinNodes) {
                if (visited[joinNode]) continue;
                parentNodes[joinNode] = node;
                visited[joinNode] = true;
                queue.push(joinNode);
            }
        }
    }
    bfs(1);
    const ans = [];
    for (let i = 2; i <= n; i++) {
        ans.push(parentNodes[i]);
    }
    console.log(ans.join('\n'))
}

solution(input);
