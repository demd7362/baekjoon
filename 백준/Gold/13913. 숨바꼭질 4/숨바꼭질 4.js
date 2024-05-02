const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .split('\n')
    // .map(x => x.trim());

function solution(nk) {
    const [n, k] = nk.split(' ').map(Number);
    const visited = Array(100001).fill(false);
    const prev = Array(100001).fill(null);
    const functions = [
        (x) => x + 1,
        (x) => x - 1,
        (x) => x * 2
    ]

    const bfs = (startValue) => {
        const queue = [startValue];
        visited[startValue] = true;

        while (queue.length > 0) {
            const value = queue.shift();

            if (value === k) {
                const path = [];
                let current = value;
                while (current !== null) {
                    path.unshift(current);
                    current = prev[current];
                }
                console.log(path.length - 1);
                console.log(path.join(' '));
                break;
            }

            for (const func of functions) {
                const newValue = func(value);
                if (newValue < 0 || newValue > 100000 || visited[newValue]) {
                    continue;
                }
                queue.push(newValue);
                visited[newValue] = true;
                prev[newValue] = value;
            }
        }
    }
    bfs(n);

}


solution(input);
