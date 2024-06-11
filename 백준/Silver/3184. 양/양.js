const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([rc, ...args]) {
    let [r, c] = rc.split(' ').map(Number);
    let board = args.map(arg => arg.split(''));
    let visited = Array.from({length: r}, () => new Array(c).fill(false));
    let directions = [[1, 0], [0, 1], [0, -1], [-1, 0]];
    let sheepsCount = 0;
    let wolvesCount = 0;
    // v 늑대 o 양
    let bfs = (startX, startY) => {
        // let current = board[startX][startY];
        // const target = current === 'v' ? 'o' : 'v';
        let wolves = 0;
        let sheeps = 0;
        let queue = [[startX, startY]];
        let front = 0;
        while (front < queue.length) {
            let [x, y] = queue[front++];
            if (visited[x][y]) {
                continue;
            }
            if (board[x][y] === 'o') {
                sheeps++;
            }
            if (board[x][y] === 'v') {
                wolves++;
            }
            visited[x][y] = true;
            for (let [dx, dy] of directions) {
                let nx = dx + x;
                let ny = dy + y;
                if (nx < 0 || ny < 0 || nx >= r || ny >= c || board[nx][ny] === '#' || visited[nx][ny]) {
                    continue;
                }
                queue.push([nx, ny]);
            }
        }
        if (sheeps > wolves) {
            sheepsCount += sheeps;
        } else {
            wolvesCount += wolves;
        }
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (visited[i][j]) {
                continue;
            }
            if (board[i][j] === 'v' || board[i][j] === 'o') {
                bfs(i, j);
            }
        }
    }
    console.log(sheepsCount, wolvesCount);
}

solution(input);
