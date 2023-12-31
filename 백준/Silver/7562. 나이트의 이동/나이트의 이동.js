const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n, ...args]) {
    n = Number(n);
    const directions = [[2, 1], [2, -1], [1, 2], [1, -2], [-2, 1], [-2, -1], [-1, 2], [-1, -2]];
    const bfs = (curr, target, visited, N) => {
        const [startX, startY] = curr;
        const queue = [{
            pos: [startX, startY],
            moves: 0
        }];
        const [targetX, targetY] = target;
        while (queue.length > 0) {
            const {pos, moves} = queue.shift();
            const [x, y] = pos;
            const isSuccess = x === targetX && y === targetY;
            if (isSuccess) {
                console.log(moves);
                return;
            }
            if(visited[x][y]) continue;
            visited[x][y] = true;
            for (const [dx, dy] of directions) {
                const nx = dx + x;
                const ny = dy + y;
                if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
                if(visited[nx][ny]) continue;
                queue.push({
                    moves: moves + 1,
                    pos: [nx, ny]
                });
            }
        }
    }
    for (let i = 0; i < args.length; i += 3) {
        const N = Number(args[i]);
        const curr = args[i + 1].split(' ').map(Number);
        const target = args[i + 2].split(' ').map(Number);
        const visited = Array.from({length: N}, () => Array(N).fill(false));
        bfs(curr, target, visited, N);
    }

}

solution(input);
