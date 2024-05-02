const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .split('\n')
    // .map(x => x.trim());

function solution(nk) {
    const [n, k] = nk.split(' ').map(Number);
    const visited = Array(100001).fill(false);
    const functions = [
        (x) => x + 1,
        (x) => x - 1,
        (x) => x * 2
    ]

    const bfs = (startValue) => {
        const queue = [{
            value: startValue,
            log: startValue,
            count: 0
        }];
        while (queue.length > 0) {
            const {value, log, count} = queue.shift();
            if (visited[value]) {
                continue;
            }
            if (value === k) {
                console.log(count);
                console.log(log);
                break;
            }
            visited[value] = true;
            for (const func of functions) {
                const newValue = func(value);
                if (newValue < 0 || newValue > 100000 || visited[newValue]) {
                    continue;
                }
                queue.push({
                    value: newValue,
                    log: log + ' ' + newValue,
                    count: count + 1
                });
            }
        }
    }
    bfs(n);

}


solution(input);
