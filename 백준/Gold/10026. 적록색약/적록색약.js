const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n, ...args], isBlind) {
    n = Number(n);
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const map = [];
    const visited = [];
    for (let i = 0; i < args.length; i++) {
        map[i] = args[i].split('');
        visited[i] = Array.from({length: args[i].length}, () => false);
    }
    if (isBlind) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (map[i][j] === 'G') {
                    map[i][j] = 'R';
                }
            }
        }
    }
    const bfs = (startX, startY) => {
        const queue = [[startX, startY]];
        let cnt = 0;
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            if (visited[x][y]) continue;
            visited[x][y] = true;
            let diffCnt = 0, totalCnt = 0;
            for (const [dx, dy] of directions) {
                const nx = dx + x;
                const ny = dy + y;
                if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
                if (visited[nx][ny]) continue;
                totalCnt++;
                if (map[x][y] !== map[nx][ny]) {
                    diffCnt++;
                    continue;
                }
                queue.push([nx, ny]);
                cnt++;
            }
            if(totalCnt === diffCnt){
                cnt++;
            }
        }
        return cnt > 0 ? 1 : 0;
    }
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            cnt += bfs(i, j);
        }
    }
    console.log(cnt);

}

solution(input, false);
solution(input,true);
