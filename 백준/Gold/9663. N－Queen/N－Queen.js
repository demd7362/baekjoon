const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution(n) {
    n = Number(n);
    let board = Array.from({length: n}, () => new Array(n).fill(false));
    const isValid = (board, row, col) => {

        for (let i = 0; i < row; i++) {
            if (board[i][col]) {
                return false;
            }
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if(board[i][j]){
                return false;
            }
        }
        for(let i = row -1, j = col + 1; i >= 0 && j < n; i--, j++){
            if(board[i][j]){
                return false;
            }
        }
        return true;
    }
    let answer = 0;
    const dfs = (row) => {
        if (row === n) {
            answer++;
            return;
        }
        for (let i = 0; i < n; i++) {
            if (isValid(board, row, i)) {
                board[row][i] = true;
                dfs(row + 1);
                board[row][i] = false;
            }

        }
    }

    dfs(0);
    console.log(answer)
}


solution(input);

