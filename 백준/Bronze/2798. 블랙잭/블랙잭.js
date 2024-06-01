const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

function solution([nm, args]) {
    const [n, m] = nm.split(' ').map(Number);
    const numbers = args.split(' ').map(Number).sort((a, b) => b - a);

    const visited = new Array(n).fill(false);
    const seq = new Array(3).fill(0);
    const getSum = (arr) => {
        return arr.reduce((acc, number) => acc + number, 0);
    }
    let diff = 300000;
    let similar = 300000;
    const dfs = (depth, index) => {
        if (depth === 3) {
            const sum = getSum(seq);
            const currDiff = m - sum;
            if(currDiff > m || currDiff < 0){
                return;
            }
            if(diff > currDiff){
                diff = currDiff;
                similar = sum;
            }
            return;
        }
        for (let i = index; i < n; i++) {
            if (visited[i]) {
                continue;
            }
            visited[i] = true;
            seq[depth] = numbers[i];
            dfs(depth + 1, i);
            visited[i] = false;
        }
    }
    dfs(0,0);
    console.log(similar);

}


solution(input);
