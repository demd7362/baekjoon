const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n, ...args]) {
    n = Number(n);
    const bfs = (startNode, graph) => {
        const visited = Array(n + 1).fill(false);
        const queue = [startNode];
        let cnt = -1;
        while (queue.length > 0) {
            const node = queue.shift();
            if (visited[node]) continue;
            visited[node] = true;
            const joinNodes = graph[node];
            for (const joinNode of joinNodes) {
                if (visited[joinNode]) continue;
                queue.push(joinNode);
            }
            cnt++;
        }
        console.log(cnt)
    }
    for (let i = 0; i < args.length;) {
        const graph = {};
        const [N, M] = args[i].split(' ').map(Number);
        for (let j = i + 1; j < i + 1 + M; j++) {
            const [line1, line2] = args[j].split(' ').map(Number);
            graph[line1] = [...graph[line1] || [], line2];
            graph[line2] = [...graph[line2] || [], line1];
        }
        bfs(N, graph);
        i += M + 1;
    }
}

solution(input);
