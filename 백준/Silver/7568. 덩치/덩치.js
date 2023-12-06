const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
String.prototype.toNumber = function () {
    return Number(this);
}
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .toNumber()
    .split("\n")
    .map(x => x.trim())

// .map(Number);

function solution([n, ...profiles]) {
    const origin = [...profiles];
    profiles = profiles.map(p => {
        const [kg, cm] = p.split(' ').map(Number);
        return {
            kg,
            cm,
            rank: 1
        }
    })
    for (let i = 0; i < n; i++) {
        const curr = profiles[i];
        for (let j = 0; j < n; j++) {
            const next = profiles[j];
            if (curr.kg < next.kg) {
                if (curr.cm < next.cm) {
                    curr.rank++;
                }
            }
        }
    }
    profiles.forEach(p => console.log(p.rank));
}

solution(input); 
