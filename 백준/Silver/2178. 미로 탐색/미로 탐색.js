const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([NM,...args]){
    const [N,M] = NM.split(' ').map(Number);
    const map = [];
    const visited = [];
    for(const arg of args){
        const splited = arg.split('');
        map.push(splited.map(Number));
        visited.push(splited.map(x => false));
    }


    const directions = [[0,1],[1,0],[-1,0],[0,-1]];
    const bfs = (startX,startY) => {
        const queue = [[startX,startY]];

        while(queue.length > 0){
            const [x,y] = queue.shift();
            if(!visited[x][y]){
                visited[x][y] = true;
                for(const [dx,dy] of directions){
                    const nx = dx + x;
                    const ny = dy + y;
                    if(visited[nx]?.[ny]) continue;
                    const value = map[nx]?.[ny];
                    if(nx < 0 || ny < 0 || nx >= N || ny >= M || value === 0) continue;
                    queue.push([nx,ny]);
                    map[nx][ny] = map[x][y] + 1;
                }
            }
        } // end while
    }
    bfs(0,0);
    console.log(map[N-1][M-1])
}



solution(input);
