const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution(args) {
    const calculate = (args) => {
        const [l, r, c] = args.shift().split(' ').map(Number);
        // l = 빌딩의 층수
        // r = x
        // c = y
        const map = [];
        const visited = [];
        let count = 0;
        const directions = [
            [-1, 0, 0], [0, -1, 0], [0, 0, -1],
            [1, 0, 0], [0, 1, 0], [0, 0, 1],
        ];
        while (count < l) {
            const arr = Array.from({length: r}, () => Array(c));
            const _visited = Array.from({length: r}, () => Array(c).fill(false));
            for (let i = 0; true; i++) {
                if(args[i] === ''){
                    args = args.slice(r + 1);
                    break;
                }
                for (let j = 0; j < c; j++) {
                    arr[i][j] = args[i][j];
                }
            }
            map.push(arr);
            visited.push(_visited);
            count++;
        }
        const bfs = (startZ, startX, startY) => {
            const queue = [{
                coordinate: [startZ, startX, startY],
                count: 0
            }];

            while (queue.length > 0) {
                const {coordinate, count} = queue.shift();
                const [z, x, y] = coordinate;
                if (visited[z][x][y]) {
                    continue;
                }
                if (map[z][x][y] === 'E') {
                    return count;
                }
                visited[z][x][y] = true;
                for (const [dz, dx, dy] of directions) {
                    const nz = dz + z;
                    const nx = dx + x;
                    const ny = dy + y;
                    if (nz < 0 || nz >= l || nx < 0 || nx >= r || ny < 0 || ny >= c || visited[nz][nx][ny] || map[nz][nx][ny] === '#') {
                        continue;
                    }
                    queue.push({
                        coordinate: [nz, nx, ny],
                        count: count + 1
                    });

                }
            }
            return 0;
        }
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < r; j++) {
                for (let k = 0; k < c; k++) {
                    if (map[i][j][k] === 'S') {
                        const result = bfs(i, j, k);
                        if(result === 0){
                            console.log('Trapped!');
                        } else {
                            console.log(`Escaped in ${result} minute(s).`);
                        }
                        return args;
                    }
                }
            }
        }
    }
    while(args?.length > 0){
        if(args[0] === '0 0 0'){
            return;
        }
        args = calculate(args);
    }
}

solution(input);
