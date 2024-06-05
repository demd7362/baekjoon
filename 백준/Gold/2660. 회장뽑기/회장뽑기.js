const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, ...args]) {
    n = Number(n);
    let graph = Array.from({length: n + 1}, () => []);

    for (let i = 0; i < args.length - 1; i++) {
        const [from, to] = args[i].split(' ').map(Number);
        graph[from].push(to);
        graph[to].push(from);
    }

    const bfs = (startNode) => {
        const visited = new Array(n + 1).fill(false);
        const queue = [{
            node: startNode,
            distance: 0
        }];
        let front = 0;
        let max = 0;
        while (front < queue.length) {
            const {node, distance} = queue[front++];
            if (visited[node]) {
                continue;
            }
            max = Math.max(distance, max);
            visited[node] = true;
            const joinNodes = graph[node];
            for (let joinNode of joinNodes) {
                if(joinNode === startNode){
                    continue;
                }
                queue.push({
                    node: joinNode,
                    distance: distance + 1
                });
            }
        }
        return max;
        // console.log(`start Node ${startNode} : ${max}`)
    }
    let arr = [];
    let min = Infinity;
    for (let i = 1; i <= n; i++) {
        let result = bfs(i);
        if(result < min){
            min = result;
        }
        arr.push({
            index: i,
            result
        })
    }
    arr = arr.filter(x => x.result === min).map(x => x.index);
    console.log(min, arr.length);
    console.log(arr.join(' '));
}


solution(input);
