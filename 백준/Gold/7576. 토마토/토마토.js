const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([mn, ...args]) {
    const [m, n] = mn.split(' ').map(Number);
    const visited = Array.from({length: n}, () => new Array(m).fill(false));
    let goal = 0;
    const tomatoesPosition = [];
    const map = args.map((arg, i) => {
        const split = arg.split(' ');
        split.forEach((x, j) => {
            if (x === '0') {
                goal++;
            }
            if (x === '1') {
                tomatoesPosition.push({
                    value: [i, Number(j)],
                    duration: 0
                })
            }
        });
        return split;
    });

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    const bfs = () => {
        let result = 0;
        let sum = 0;
        const queue = tomatoesPosition;
        let front = 0;
        while (front < queue.length) {
            const {value: currentValue, duration} = queue[front++];
            const [x, y] = currentValue;
            if (visited[x][y]) {
                continue;
            }
            result = Math.max(result, duration);
            visited[x][y] = true;
            if (map[x][y] === '0') {
                map[x][y] = '1';
                sum++;
            }
            for (const [dx, dy] of directions) {
                const nx = dx + x;
                const ny = dy + y;
                if (nx < 0 || ny < 0 || nx >= n || ny >= m || map[nx][ny] !== '0' || visited[nx][ny]) {
                    continue;
                }
                queue.push({
                    value: [nx, ny],
                    duration: duration + 1,
                })
            }

        }
        if (goal === sum) {
            console.log(result);
        } else {
            console.log(-1);
        }
    }
    bfs();
}

solution(input);
