const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution(args) {
    const map = args.map(arg => arg.split(' '));
    const set = new Set();
    const N = 5;
    const bfs = (startX, startY) => {
        const queue = [{
            x: startX,
            y: startY,
            word: ''
        }];
        const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
        while (queue.length > 0) {
            const {x,y,word} = queue.shift();
            if(word.length > 5) {
                set.add(word);
                continue;
            }
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx < 0 || nx > 4 || ny < 0 || ny > 4) continue;
                queue.unshift({
                    x: nx,
                    y: ny,
                    word: word + map[nx][ny]
                });
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            bfs(i, j);
        }
    }
    console.log(set.size);

}

solution(input);
