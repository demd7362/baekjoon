const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())


function solution([computerCount, networkingCount, ...computerNumbers]) {
    const network = {};
    for (const computerNumber of computerNumbers) {
        const [target, linked] = computerNumber.split(' ').map(Number);
        network[target] = network[target] ? [...network[target], linked] : [linked];
        network[linked] = network[linked] ? [...network[linked], target] : [target]; // 양방향 네트워크를 위해
    }

    let virusSet = new Set();
    const find = (computer, visited = new Set()) => {
        if (visited.has(computer)) {
            return;
        }

        visited.add(computer);
        const linkedComputers = network[computer];
        if (linkedComputers) {
            for (const linkedComputer of linkedComputers) {
                virusSet.add(linkedComputer);
                find(linkedComputer, visited);
            }
        }
    };

    find(1);
    console.log([...virusSet].filter(x => x !== 1).length); // 시작 컴퓨터(1)를 결과에서 제외
}

solution(input);