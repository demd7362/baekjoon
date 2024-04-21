const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([RCK, ...args]) {
    const [r, c, k] = RCK.split(' ').map(Number);
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const map = args.map(arg => arg.split(''));
    let count = 0;
    const visited = Array.from({length: r}, () => Array(c).fill(false))
    const dfs = (x, y, depth = 1) => {
        if (x === 0 && y === c - 1 && depth === k) {
            count++;
            return;
        }
        for (const [dx, dy] of directions) {
            const nx = dx + x;
            const ny = dy + y;
            if (nx >= r || nx < 0 || ny >= c || ny < 0 || visited[nx][ny] || map[nx][ny] === 'T') continue;
            visited[nx][ny] = true;
            dfs(nx, ny, depth + 1);
            visited[nx][ny] = false;
        }

    }
    visited[r - 1][0] = true;
    dfs(r - 1, 0);
    console.log(count);
}


solution(input);
