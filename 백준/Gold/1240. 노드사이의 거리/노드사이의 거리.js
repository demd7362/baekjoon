const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([nm, ...args]) {
    const [n, m] = nm.split(' ').map(Number);
    const nodes = [];
    for (let i = 0; i < n - 1; i++) {
        const [start, end, distance] = args[i].split(' ').map(Number);
        nodes.push({start, end, distance});
    }

    const graph = nodes.reduce((acc, node) => {
        const {start, end, distance} = node;
        if (!acc[start]) {
            acc[start] = [{
                node: end,
                distance
            }];
        } else {
            acc[start].push({
                node: end,
                distance
            });
        }
        if (!acc[end]) {
            acc[end] = [{
                node: start,
                distance
            }];
        } else {
            acc[end].push({
                node: start,
                distance
            });
        }
        return acc;
    }, {});
    const bfs = (from, to) => {
        const visited = new Array(n + 1).fill(false);
        const queue = [{
            node: from,
            distance: 0
        }];
        let front = 0;
        while (front < queue.length) {
            const {node, distance} = queue[front++];
            if (visited[node]) {
                continue;
            }
            visited[node] = true;
            const joinNodes = graph[node];
            for (const joinNode of joinNodes) {
                const {node: currentNode, distance: currentDistance} = joinNode;
                if (currentNode === to) {
                    return currentDistance + distance;
                }
                queue.push({
                    distance: currentDistance + distance,
                    node: currentNode
                })
            }
        }
    }
    for (let i = n - 1; i < args.length; i++) {
        const [from, to] = args[i].split(' ').map(Number);
        const answer = bfs(from, to);
        console.log(answer);
    }
}

solution(input);
