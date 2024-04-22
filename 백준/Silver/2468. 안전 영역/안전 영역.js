const fs = require("fs");
const timers = require("timers");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());

function solution([n, ...args]) {
    n = Number(n);
    const map = args.map(arg => arg.split(' ').map(Number));
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    const bfs = (startX, startY, height, visited) => {
        const queue = [[startX, startY]];
        let flag = false;
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            const currentHeight = map[x][y];
            visited[x][y] = true;
            if (currentHeight <= height) {
                continue;
            } else {
                flag = true;
            }
            for (const [dx, dy] of directions) {
                const nx = dx + x;
                const ny = dy + y;
                if (nx < 0 || ny < 0 || nx >= n || ny >= n || visited[nx][ny]) {
                    continue;
                }
                visited[nx][ny] = true;
                const newHeight = map[nx][ny];
                if (newHeight <= height) {
                    continue;
                }
                queue.push([nx, ny]);
            }

        }
        return flag;
    }
    let max = 0;
    for (let i = 0; i <= 100; i++) {
        const visited = Array.from({length: n}, () => Array(n).fill(false));
        let count = 0;
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (!visited[j][k]) {
                    const result = bfs(j, k, i, visited);
                    count += result ? 1 : 0;
                }
            }
        }
        max = Math.max(max, count);
    }
    console.log(max);
}


solution(input);
