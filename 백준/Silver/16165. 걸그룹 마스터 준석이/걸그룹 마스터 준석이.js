const fs = require("fs");
const timers = require("timers");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());

function solution([nm, ...args]) {
    const [n, m] = nm.split(' ').map(Number);
    let count = 0;
    let index = 0;
    const map = {};
    while (count < n) {
        const value = args.shift();
        index = args.shift();
        for (let i = 0; i < index; i++) {
            const name = args.shift();
            if (!map[value]) {
                map[value] = [];
            }
            map[value].push(name);
            map[name] = value;
        }
        count++;
    }
    for (let i = 0; i < args.length; i += 2) {
        const value = args[i];
        const number = args[i+1];
        if(number === "1"){
            console.log(map[value]);
        } else {
            console.log(map[value].sort((a,b) => a.localeCompare(b)).join('\n'));
        }
    }
}


solution(input);
