const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(nk) {
    const [n,k] = nk.split(' ').map(Number);
    const visited = new Array(100001).fill(false);
    const functions = [
        x => ({value: x * 2, isWarped : true}),
        x => ({value: x - 1, isWarped : false}),
        x => ({value: x + 1, isWarped : false})
    ];

    const bfs = (start) => {
        const queue = [{
            duration: 0,
            value: start,
        }];
        while(queue.length > 0){
            const {value: currentValue, duration} = queue.shift();
            if(visited[currentValue]){
                continue;
            }
            if(currentValue === k){
                console.log(duration);
                return;
            }
            visited[currentValue] = true;
            for(const func of functions){
                const {value:newValue, isWarped} = func(currentValue);
                if(newValue < 0 || newValue > 100000 || visited[newValue]){
                    continue;
                }
                const newDuration = isWarped ? duration : duration + 1;
                // if(isWarped){
                //     console.log('duration',duration)
                //     console.log('currentVal',currentValue)
                // }
                queue.push({
                    value: newValue,
                    duration: newDuration
                });
            }
        }
    }
    bfs(n);
}

solution(input);
