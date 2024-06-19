const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(ab) {
    let [a, b] = ab.split(' ').map(Number);
    const operators = [(x) => x * 2, (x) => Number(x.toString() + '1')];
    // const visited = new Array(b + 1).fill(false);
    const bfs = (x) => {
        const queue = [{
            value: x,
            count: 1,
        }];
        let front = 0;
        while (front < queue.length) {
            const {value: nx, count} = queue[front++];
            // if (visited[nx]) {
            //     continue;
            // }
            if (nx === b) {
                console.log(count);
                return;
            }
            // visited[nx] = true;
            for (const operator of operators) {
                const result = operator(nx);
                if (result > b) {
                    continue;
                }
                queue.push({
                    value: result,
                    count: count + 1,
                });
            }
        }
        console.log(-1);

    }
    bfs(a);
}

solution(input);
