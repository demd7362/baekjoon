const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())




function solution([n, stones, s]) {
    const start = Number(s);
    stones = stones.split(' ').map(Number);
    const stoneCount = Number(n);
    let count = 0;
    const bfs = (start) => {
        const queue = [start];
        let front = 0;
        let visited = new Array(stoneCount).fill(false);
        while(front < queue.length){
            const index = queue[front++];
            if(visited[index]){
                continue;
            }
            visited[index] = true;
            count++;
            const jumpValue = stones[index];
            const nextStoneIndexes = [index + jumpValue, index - jumpValue];
            for(let nextStoneIndex of nextStoneIndexes){
                if(nextStoneIndex >= 0 && nextStoneIndex < stoneCount){
                    queue.push(nextStoneIndex);
                }
            }
        }
        console.log(count);
    }
    bfs(start - 1);
}

solution(input);
