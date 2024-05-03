const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([nm, ...args]) {
    const [n, m] = nm.split(' ').map(Number);
    const visited = Array.from({length: n}, () => new Array(m).fill(false));

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const map = args.map(arg => arg.split(' ').map(Number));
    let max = 0;
    const bfs = (startX, startY) => {
        let sum = 0;
        const queue = [[startX,startY]];
        let front = 0;
        while (front < queue.length) {
            const [x,y] = queue[front++];
            if (visited[x][y]) {
                continue;
            }
            visited[x][y] = true;
            if(map[x][y] === 1){
                sum++;
                max = Math.max(sum, max);
            }
            for (const [dx, dy] of directions) {
                const nx = dx + x;
                const ny = dy + y;
                if (nx < 0 || ny < 0 || nx >= n || ny >= m || map[nx][ny] === 0 || visited[nx][ny]) {
                    continue;
                }
                queue.push([nx,ny]);
            }
        }
        return sum > 0 ? 1 : 0;
    }
    let totalCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && map[i][j] === 1) {
                totalCount += bfs(i, j);
            }
        }
    }
    console.log(totalCount);
    console.log(max);
}

solution(input);
