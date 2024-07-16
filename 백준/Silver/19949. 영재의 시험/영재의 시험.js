const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(args) {
    let answers = args.split(' ').map(Number);
    let seq = [];
    const check = () => {
        let cnt = 0;
        for (let i = 0; i < 10; i++) {
            if(seq[i] === answers[i]){
                cnt++;
            }
            if(cnt >= 5){
                return true;
            }

        }
        return false;
    }
    let answer = 0;
    const dfs = (depth, current) => {
        if (depth === 10) {
            const result = check();
            if(result){
                answer++;
            }
            return;
        }
        for (let i = 1; i <= 5; i++) {
            if (current.slice(-2) === i.toString().repeat(2)) {
                continue;
            }
            seq[depth] = i;
            dfs(depth + 1, current + i.toString());
        }
    }
    dfs(0, '');
    console.log(answer);
}

solution(input);
