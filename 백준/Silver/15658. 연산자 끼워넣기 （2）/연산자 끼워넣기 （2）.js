const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, numbers, operators]) {
    n = Number(n);
    operators = operators.split(' ').map(Number);
    numbers = numbers.split(' ').map(Number);

    let max = -Infinity;
    let min = Infinity;
    function dfs(index, current) {
        if (index === n) {
            max = Math.max(max, current);
            min = Math.min(min, current);
            return;
        }

        for (let i = 0; i < 4; i++) {
            if (operators[i] > 0) {
                operators[i]--;
                let next;
                if (i === 0) next = current + numbers[index];
                else if (i === 1) next = current - numbers[index];
                else if (i === 2) next = current * numbers[index];
                else next = current > 0 ? Math.floor(current / numbers[index]) : -Math.floor(-current / numbers[index]);

                dfs(index + 1, next);
                operators[i]++;
            }
        }
    }

    dfs(1, numbers[0]);
    console.log(`${max}\n${min}`);
}


solution(input);
