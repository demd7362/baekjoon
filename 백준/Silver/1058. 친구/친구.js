const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n, ...args]) {
    const links = args.map(arg => arg.split(''));
    const results = [];
    const map = Array.from({length : links.length}, (_,i) => []);
    for (let i = 0; i < links.length; i++) {
        for (let j = 0; j < links[i].length; j++) {
            if(links[i][j] === 'Y'){
                map[i].push(j + 1);
            }
        }
    }
    for (let i = 0; i < links.length; i++) {
        let result = 0;
        for (let j = 0; j < links[i].length; j++) {
            if(links[i][j] === 'Y' && links[j][i] === 'Y'){
                result++;
            } else {
                for(let k = 0; k<map.length; k++){
                    if(i === k || j === k || i === j) continue;
                    if(map[k].includes(i+1) && map[k].includes(j+1)){
                        result++;
                        break;
                    }
                }
            }
        }
        results.push(result)
    }
    console.log(Math.max(...results))
}


solution(input);
