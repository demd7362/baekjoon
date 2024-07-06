const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution(trees) {
    const counter = trees.reduce((acc, tree) => {
        acc[tree] = (acc[tree] ?? 0) + 1;
        return acc;
    }, {});
    const arr = [];
    const len = trees.length;
    const keys = Object.keys(counter).sort();
    for (const key of keys) {
        let ratio = (counter[key] / len * 100).toFixed(4);
        arr.push({
            ratio,
            name: key
        });
    }

    arr.forEach(x => console.log(`${x.name} ${x.ratio}`));

}


solution(input);
