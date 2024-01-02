const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([NM, ...args]) {
    const [N, M, K] = NM.split(' ').map(Number);
    const visited = Array.from({length: N}, () => new Array(M).fill(false));
    const map = [];
    let startXY;
    for (let i = 0; i < N; i++) {
        const row = args[i].split(' ').map(Number);
        map[i] = [];
        for (let j = 0; j < M; j++) {
            switch (row[j]) {
                case 0:
                    map[i].push(0);
                    break;
                case 2:
                    startXY = [i, j];
                    map[i].push(0);
                    break;
                case 1:
                    map[i].push(1);
            }
        }
    }
    // 0은 갈 수 없는 땅이고 1은 갈 수 있는 땅, 2는 목표지점이다. 입력에서 2는 단 한개이다.
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const bfs = ([startX, startY]) => {
        const queue = [[startX, startY]];
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            if (visited[x][y]) continue;
            visited[x][y] = true;
            for (const [dx, dy] of directions) {
                const nx = dx + x;
                const ny = dy + y;
                if (nx < 0 || ny < 0 || ny >= M || nx >= N) continue;
                if (visited[nx][ny] || map[nx][ny] === 0) {
                    continue;
                }
                map[nx][ny] = map[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    bfs(startXY);
    const ans = [];
    for (let i = 0; i < N; i++) {
        const arr = [];
        for (let j = 0; j < M; j++) {
            if(map[i][j] === 1 && !visited[i][j]){
                arr.push(-1);
            } else {
                arr.push(map[i][j]);
            }
        }
        ans.push(arr);
    }
    ans.forEach(x => console.log(x.join(' ')))
}

solution(input);
