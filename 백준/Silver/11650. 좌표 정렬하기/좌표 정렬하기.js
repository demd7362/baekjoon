const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(x => x.trim());


function solution([n, ...rest]) {
    const params = [];
    for(const args of rest){
        const [x,y] = args.split(' ').map(Number);
        params.push({x,y});
    }
    params.sort((a,b) => {
        if(a.x === b.x){
            return a.y - b.y;
        } else {
            return a.x - b.x;
        }
    });
    const answer = [];
    params.forEach(x => answer.push(`${x.x} ${x.y}`));
    console.log(answer.join('\n'));

}


solution(input);
