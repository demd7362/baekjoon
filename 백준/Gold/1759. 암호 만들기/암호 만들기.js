const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([lc, args]) {
    const [l, c] = lc.split(' ').map(Number);
    const visited = new Array(c).fill(false);
    const seq = new Array(l).fill(0);
    const alphabets = args.split(' ').sort((a, b) => a.localeCompare(b));
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const answer = [];
    const isSatisfied = (alphabets) => {
        let [vowelsCount, consonantCount] = [0, 0];
        alphabets.forEach(alphabet => {
            if (vowels.has(alphabet)) {
                vowelsCount++;
            } else {
                consonantCount++;
            }
        });
        return vowelsCount && consonantCount >= 2;
    }
    const dfs = (depth, index) => {
        if (depth === l) {
            if (isSatisfied(seq)) {
                answer.push(seq.join(''));
            }
            return;
        }
        for (let i = index; i < c; i++) {
            if (visited[i]) {
                continue;
            }
            seq[depth] = alphabets[i];
            visited[i] = true;
            dfs(depth + 1, i);
            visited[i] = false;
        }
    }
    dfs(0, 0);
    console.log(answer.join('\n'));

}


solution(input);
