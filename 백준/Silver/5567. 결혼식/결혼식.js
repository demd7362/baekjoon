const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([N, M, ...args]) {
    const graph = {};
    for (const arg of args) {
        const [l1, l2] = arg.split(' ').map(Number);
        graph[l1] = [...graph[l1] ?? [], l2];
        graph[l2] = [...graph[l2] ?? [], l1];
    }
    const arr = Array(N+1).fill(false);
    arr[1] = true;
    const friends = graph['1'] ?? [];
    let cnt = 0;
    for (const f of friends) {
        const fof = graph[f] ?? [];
        if(!arr[f]){
            arr[f] = true;
            cnt++;
        }
        for(const nf of fof){
            if(!arr[nf]){
                arr[nf] = true;
                cnt++;
            }
        }
    }
    console.log(cnt);
}

solution(input);
