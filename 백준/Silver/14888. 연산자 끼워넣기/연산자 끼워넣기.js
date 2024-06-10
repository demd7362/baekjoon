const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());

function solution([n, numbers, operators]) {
    n = Number(n);
    numbers = numbers.split(' ').map(x => BigInt(x)); // BigInt로 변환
    let [plus, minus, multiple, divide] = operators.split(' ').map(Number);
    const merge = (arr, value, count) => {
        for (let i = 0; i < count; i++) {
            arr.push(value);
        }
        return arr;
    }
    operators = merge([], '+', plus);
    operators = merge(operators, '-', minus);
    operators = merge(operators, '*', multiple);
    operators = merge(operators, '/', divide);
    let seq = [];
    let visited = new Array(n - 1).fill(false);

    const functions = {
        '+': (arg1, arg2) => {
            return arg1 + arg2;
        },
        '-': (arg1, arg2) => {
            return arg1 - arg2;
        },
        '*': (arg1, arg2) => {
            return arg1 * arg2;
        },
        '/': (arg1, arg2) => {
            if (arg1 < 0n) {
                return -((-arg1) / arg2); // BigInt에 대한 나눗셈 처리
            }
            return arg1 / arg2;
        }
    }
    let min = BigInt(Number.MAX_SAFE_INTEGER);
    let max = BigInt(Number.MIN_SAFE_INTEGER);
    const dfs = (depth) => {
        if (depth === n - 1) {
            let acc = numbers[0];
            for (let i = 0; i < n - 1; i++) {
                acc = functions[seq[i]](acc, numbers[i + 1]);
            }
            min = min < acc ? min : acc;
            max = max > acc ? max : acc;
            return;
        }
        for (let i = 0; i < operators.length; i++) {
            if (visited[i]) {
                continue;
            }
            visited[i] = true;
            seq[depth] = operators[i];
            dfs(depth + 1);
            visited[i] = false;
        }
    }
    dfs(0);
    console.log(max.toString());
    console.log(min.toString());
}

solution(input);
