const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([NM, ...args]) {
    const [n, m] = NM.split(' ').map(Number);
    const graph = {};
    for (const arg of args) {
        const [line1, line2] = arg.split(' ').map(Number);
        graph[line1] = [...graph[line1] || [], line2];
        graph[line2] = [...graph[line2] || [], line1];
    }
    const bfs = (startNode, targetNode) => {
        const queue = [{
            node: startNode,
            deep: 0
        }];
        const visited = Array(n + 1).fill(false);
        while (queue.length > 0) {
            const {node, deep} = queue.shift();
            if (visited[node]) continue;
            visited[node] = true;
            const joinNodes = graph[node];
            for (const joinNode of joinNodes) {
                if (visited[joinNode]) continue;
                if (joinNode === targetNode) {
                    return deep + 1;
                }
                queue.push({
                    node: joinNode,
                    deep: deep + 1
                });

            }
        }

    }
    const results = [];
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        for (let j = 1; j <= n; j++) {
            if (i === j) continue;
            sum += bfs(i, j);
        }
        results.push({
            startNode: i,
            sum
        })
    }
    results.sort((a, b) => {
        const {startNode:aNode, sum:aSum} = a;
        const {startNode:bNode, sum:bSum} = b;
        if (aSum === bSum) {
            return aNode - bNode;
        }
        return aSum - bSum;
    })
    console.log(results[0].startNode);
}

solution(input);
