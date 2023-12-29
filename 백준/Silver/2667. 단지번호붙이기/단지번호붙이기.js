const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n, ...args]) {
    n = Number(n);
    const visited = [];
    const map = [];
    for (const arg of args) {
        map.push(arg.split('').map(Number));
        visited.push(Array.from({length: arg.length}).fill(false));
    }
    const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    const bfs = (startX, startY) => {
        let cnt = 0;
        const queue = [[startX, startY]];
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            if (visited[x][y]) continue;
            visited[x][y] = true;
            for (const [dx, dy] of directions) {
                const nx = dx + x;
                const ny = dy + y;
                if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
                if (map[nx][ny] === 0 || map[nx][ny] === '$') continue;
                queue.push([nx, ny]);
                map[nx][ny] = '$';
                cnt++;
            }
        }
        return cnt || 1;
    }
    const ans = [];
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (!visited[i][j] && map[i][j] !== 0) {
                let cnt = bfs(i, j);
                if (cnt > 0) {
                    ans.push(cnt);
                }
            }
        }
    }
    // map.forEach(x => console.log(x.join(' ')));
    console.log(ans.length);
    console.log(ans.sort((a, b) => a - b).join('\n'));
}

solution(input);
