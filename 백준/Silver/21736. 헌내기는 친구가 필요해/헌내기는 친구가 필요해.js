const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());


function solution([NM, ...rest]) {
    const [N, M] = NM.split(' ').map(Number);
    const map = [];
    for (let i = 0; i < N; i++) {
        const arr = rest[i].split('');
        map.push(arr);
    }
    let count = 0;
    const getDY = () => {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 'I') return `${i}/${j}`;
            }
        }
    }

    const dfs = (x, y, visited = new Set()) => {
        const coordinate = `${x}/${y}`;
        if (visited.has(coordinate) || x < 0 || y < 0 || x >= N || y >= M || map[x][y] === 'X') return;

        visited.add(coordinate);
        if (map[x][y] === 'P') count += 1;

        dfs(x + 1, y, visited);
        dfs(x - 1, y, visited);
        dfs(x, y + 1, visited);
        dfs(x, y - 1, visited);
    };

    const [dyX, dyY] = getDY().split('/').map(Number);
    dfs(dyX, dyY);
    console.log(count === 0 ? 'TT' : count);
}

solution(input);

