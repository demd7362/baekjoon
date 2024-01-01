const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());


function solution([n,...args]){
    const results = [];
    for(const arg of args){
        // 호텔의 층 수, 각 층의 방 수, 몇 번째 손님인지를 나타낸다
        const [H, W, N] = arg.split(' ').map(Number);
        let floor = N % H;
        let roomNumber = Math.ceil(N / H);

        if (floor === 0) {
            floor = H;
        }
        results.push(`${floor}${roomNumber.toString().padStart(2, '0')}`);
    }
    console.log(results.join('\n'))
}

solution(input)
