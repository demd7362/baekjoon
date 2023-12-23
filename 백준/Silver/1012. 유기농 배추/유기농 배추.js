const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());

/*
입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다.
그 다음 줄부터 각각의 테스트 케이스에 대해 첫째 줄에는 배추를 심은 배추밭의 가로길이 M(1 ≤ M ≤ 50)과 세로길이 N(1 ≤ N ≤ 50),
그리고 배추가 심어져 있는 위치의 개수 K(1 ≤ K ≤ 2500)이 주어진다.
그 다음 K줄에는 배추의 위치 X(0 ≤ X ≤ M-1), Y(0 ≤ Y ≤ N-1)가 주어진다.
두 배추의 위치가 같은 경우는 없다.
 */
function solution([n, ...args]) {
    n = Number(n);
    const maps = [];
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const visiteds = [];
    let map;
    const mnks = [];
    for (const arg of args) {
        const split = arg.split(' ');
        if (split.length === 3) {
            if (map !== undefined) {
                maps.push(map);
            }
            map = undefined;
            const [M, N, K] = split.map(Number);
            mnks.push([M, N, K]);
            map = Array.from({length: M}, () => Array.from({length: N}).fill(0));
            const visited = Array.from({length: M}, () => Array.from({length: N}).fill(false));
            visiteds.push(visited);
        } else if (split.length === 2) {
            const [x, y] = split.map(Number);
            map[x][y] = 1;
        }
    }
    maps.push(map);
    const cnts = [];
    let cnt;
    const bfs = (startX, startY,mnk,i) => {
        const [M,N,K] = mnk;
        const queue = [[startX, startY]];
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            if(visiteds[i][x][y]) continue;
            visiteds[i][x][y] = true;
            for (const [dx, dy] of directions) {
                const nx = dx + x;
                const ny = dy + y;
                if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
                if(maps[i][nx][ny] === 1) {
                    queue.push([nx, ny]);
                }
            }
        }
        cnt++;
    }
    for (let i = 0; i < n; i++) {
        const mnk = mnks[i];
        const map = maps[i];
        cnt = 0;
        for (let j = 0; j < map.length; j++) {
            for (let k = 0; k < map[i].length; k++) {
                if(visiteds[i][j][k]) continue;
                const target = map[j][k];
                if(target === 1){
                    bfs(j,k,mnk,i);
                }
            }
        }
        cnts.push(cnt);
    }
    console.log(cnts.join('\n'))
}

solution(input);
