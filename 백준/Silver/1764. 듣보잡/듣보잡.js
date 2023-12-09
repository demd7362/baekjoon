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


function solution([NM, ...rest]) { // 5 17 => 4
    const [N, M] = NM.split(' ').map(Number);
    const map = rest.reduce((acc, name) => {
        acc[name] = (acc[name] ?? 0)+1;
        return acc;
    }, {});
    let entries = Object.entries(map).filter(([key, value]) => {
        return value > 1;
    });
    entries = entries.sort(([aKey, aValue], [bKey, bValue]) => {
        return aKey.localeCompare(bKey);
    })
    console.log(entries.length)
    entries.forEach(entry => {
        console.log(entry[0])
    })

}

solution(input);
