const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

// .map(Number);

function solution([RC, ...args]) {
    const [row, column] = RC.split(' ').map(Number);
    const map = args.map(arg => arg.split(''));
    const words = [];
    const isBlocked = (str) => str === '#';
    const isWord = (str) => str.length > 1;
    const searchRow = () => {
        for (let i = 0; i < row; i++) {
            let word = '';
            for (let j = 0; j < column; j++) {
                const current = map[i][j];
                if(isBlocked(current)){
                    if(isWord(word)){
                        words.push(word);
                    }
                    word = '';
                    continue;
                }
                word += current;
            }
            if(isWord(word)){
                words.push(word);
            }
        }
    }
    const searchColumn = () => {
        for (let i = 0; i < column; i++) {
            let word = '';
            for (let j = 0; j < row; j++) {
                const current = map[j][i];
                if(isBlocked(current)){
                    if(isWord(word)){
                        words.push(word);
                    }
                    word = '';
                    continue;
                }
                word += current;
            }
            if(isWord(word)){
                words.push(word);
            }
        }
    }
    searchRow();
    searchColumn();
    words.sort((a,b) => a.localeCompare(b));
    
    console.log(words[0]);
}

solution(input);
