const fs = require("fs");
const trace_events = require("trace_events");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .split("\n")
    // .map(x => x.trim())


function solution(fsgud) {
    const [f,s,g,u,d] = fsgud.split(' ').map(Number);
    // f 총 층수
    // s 강호가 현재 있는 층
    // g 스타트링크가 있는 층
    // u 위로 u층을 가는 버튼
    // d 아래로 d층을 가는 버튼
    const directions = [+u, -d];
    const visited = new Array(f+1).fill(false);
    const bfs = (start) => {
        const queue = [{
            pos: start,
            count: 0
        }];
        while(queue.length > 0){
            const {pos:curr,count} = queue.shift();
            if(visited[curr]){
                continue;
            }
            if(g === curr){
                console.log(count);
                return;
            }
            visited[curr] = true;
            for(const value of directions){
                const newValue = value + curr;
                if(newValue <= 0 || newValue > f || visited[newValue]){
                    continue;
                }
                queue.push({
                    pos: newValue,
                    count: count + 1
                });
            }
        }
        console.log('use the stairs');
    }
    bfs(s);


}

solution(input);
