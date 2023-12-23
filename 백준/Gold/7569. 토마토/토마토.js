const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());

function solution([mnh, ...args]) {
    const [M, N, H] = mnh.split(' ').map(Number);
    const map = Array.from({ length: H }, () => Array.from({ length: N }, () => Array(M).fill(0)));
    const visited = Array.from({ length: H }, () => Array.from({ length: N }, () => Array(M).fill(false)));
    const queue = [];
    let front = 0;

    args.forEach((line, index) => {
        const z = Math.floor(index / N);
        const x = index % N;
        line.split(' ').forEach((value, y) => {
            map[z][x][y] = Number(value);
            if (value === '1') {
                queue.push([z, x, y]);
                visited[z][x][y] = true;
            }
        });
    });
    const directions = [[0, 0, 1], [0, 1, 0], [1, 0, 0], [0, 0, -1], [0, -1, 0], [-1, 0, 0]];

    const bfs = () => {
        while (front < queue.length) {
            const [z, x, y] = queue[front++];
            for (const [dz, dx, dy] of directions) {
                const nz = z + dz, nx = x + dx, ny = y + dy;
                if (nz >= 0 && nz < H && nx >= 0 && nx < N && ny >= 0 && ny < M && map[nz][nx][ny] === 0) {
                    queue.push([nz, nx, ny]);
                    map[nz][nx][ny] = map[z][x][y] + 1;
                    visited[nz][nx][ny] = true;
                }
            }
        }
    };

    bfs();

    let max = 1;
    for (const layer of map) {
        for (const row of layer) {
            for (const tomato of row) {
                if (tomato === 0) {
                    console.log(-1);
                    return;
                }
                max = Math.max(max, tomato);
            }
        }
    }
    console.log(max - 1);
}

solution(input);
