const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .toNumber();
// .split("\n")
// .map(x => x.trim())
// .map(Number);

function solution(N) {

    const pattern = [];
    const makeStar = (x, y, n) => {
        if (n === 1) {
            pattern[x][y] = '*';
            return;
        }
        n /= 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!(i === 1 && j === 1)) {
                    const newX = x + j * n;
                    const newY = y + i * n
                    makeStar(newX, newY, n);
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
        pattern[i] = [];
        for (let j = 0; j < N; j++) {
            pattern[i][j] = ' ';
        }
    }
    makeStar(0, 0, N);
    pattern.forEach(star => console.log(star.join('')));
}

solution(input);


