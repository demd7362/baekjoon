const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(n) {
    n = Number(n);
    const functions = [
        (x) => x / 3,
        (x) => x / 2,
        (x) => x - 1
    ]
    const conditions = [
        (x) => x % 3 === 0,
        (x) => x % 2 === 0,
        () => true
    ]
    const visited = new Array(n + 1).fill(false);
    let answer = [];
    const bfs = (x) => {
        const queue = [{
            value: x,
            count: 0,
            log: x
        }];
        let front = 0;
        while (front < queue.length) {
            const {value, count, log} = queue[front++];
            if (value === 1) {
                answer.push(queue[front - 1]);
                return;
            }
            if (visited[value] || value < 1) {
                continue;
            }
            visited[value] = true;
            for (let i = 0; i < 3; i++) {
                if (conditions[i](value)) {
                    let newValue = functions[i](value);
                    if (visited[newValue]) {
                        continue;
                    }
                    queue.push({
                        value: newValue,
                        count: count + 1,
                        log: log + ' ' + newValue
                    });
                }
            }
        }
    }
    bfs(n);
    answer.sort((a, b) => a.count - b.count);
    console.log(answer[0].count);
    console.log(answer[0].log);
}

solution(input);
