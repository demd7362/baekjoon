const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')

// .map(x => x.trim());


function solution([args]) {
    const [n, k] = args.split(' ').map(Number);
    if (n === k) {
        console.log(0);
        return;
    }
    if (k === 0) {
        console.log(n);
        return;
    }
    if (n > k) {
        console.log(n - k);
        return;
    }

    const functions = [(x) => x - 1, (x) => x + 1, (x) => x * 2];
    const visited = Array(100001).fill(false);

    const bfs = (start) => {
        const queue = [{
            value: start,
            sec: 0
        }];

        while (queue.length > 0) {
            const {value, sec} = queue.shift();
            if (visited[value]) {
                continue;
            }
            visited[value] = true;
            if (value === k) {
                console.log(sec);
                return;
            }
            for (const func of functions) {
                const newValue = func(value);
                if (newValue < 0 || newValue > 100000 || visited[newValue]) continue;
                queue.push({
                    value: newValue,
                    sec: sec + 1
                });
            }
        }
    }
    bfs(n);
}


solution(input);
