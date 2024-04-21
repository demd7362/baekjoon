const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([RC, ...args]) {
    const [c, r] = RC.split(' ').map(Number);
    const visited = Array.from({length: r}, () => Array(c).fill(false));
    const map = args.map(arg => arg.split(''));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const answer = {
        'W': 0,
        'B': 0
    }
    const counts = {
        'W': 1,
        'B': 1
    }
    const dfs = (x, y, target) => {
        if (visited[x][y]) return;
        visited[x][y] = true;
        for (const [dx, dy] of directions) {
            const nx = dx + x;
            const ny = dy + y;
            if (nx < 0 || ny < 0 || nx >= r || ny >= c || visited[nx][ny]) continue;
            if (map[nx][ny] === target) {
                counts[target]++;
                dfs(nx, ny, target);
            }
        }
    }
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (!visited[i][j]) {
                const target = map[i][j];
                counts[target] = 1;
                dfs(i, j, target);
                answer[target] += counts[target] ** 2;
            }
        }
    }
    console.log(answer.W + ' ' + answer.B);
}


solution(input);
