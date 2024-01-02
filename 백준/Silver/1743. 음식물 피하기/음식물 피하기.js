const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([NMK, ...args]) {
    const [N, M, K] = NMK.split(' ').map(Number);
    const map = Array.from({length: N}, () => new Array(M).fill(0));
    const visited = Array.from({length: N}, () => new Array(M).fill(false));
    for (const arg of args) {
        const [r, c] = arg.split(' ').map(Number);
        map[r - 1][c - 1] = 1;
    }
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const bfs = (startX, startY) => {
        let size = map[startX][startY];
        const queue = [[startX, startY]];
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            if (visited[x][y]) continue;
            visited[x][y] = true;
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
                if (visited[nx][ny] || map[nx][ny] === 0) continue;
                queue.push([nx,ny]);
            }
            size++;
        }
        return size - 1;
    }
    let ans = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (visited[i][j] || map[i][j] === 0) continue;
            ans = Math.max(bfs(i, j),ans);
        }
    }
    console.log(ans)
}

solution(input);
