const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim());


function solution(input) {
    const [N, K] = input.split(' ').map(Number);
    const visited = Array.from({length: N}).fill(false);
    visited[0] = true;
    let multiple = 2;
    let answer = [];
    loop:
    for (let i = 2; answer[K] === undefined;) {
        if (i >= N || visited[i-1]) {
            for(let j = i; j<=N; j += multiple){
                if(!visited[j-1]){
                    visited[j-1] = true;
                    answer.push(j);
                    i = j;
                    continue loop;
                }
            }
            const index = visited.findIndex(isVisited => !isVisited) + 1;
            multiple = index;
            i = index;
        } else {
            visited[i-1] = true;
            answer.push(i);
            i += multiple;
        }

    }
    console.log(answer[K-1]);

}


solution(input);
