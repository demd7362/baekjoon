const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([n, ...args]) {
    let i = 0;
    let binarySearch = (arr, target) => {
        // arr에 target보다 큰게몇개 존재하는가?
        let front = 0;
        let rear = arr.length - 1;
        let count = 0;
        while (front <= rear) {
            if(arr[front] < target){
                front++
            } else if(arr[rear] > target){
                count++
                rear--
            } else {
                // front++
                // rear--
                break
            }
        }
        return count;
    }
    while (n > 0) {
        let currents = args[i + 1].split(' ').map(Number).sort((a, b) => a-b);
        let targets = args[i + 2].split(' ').map(Number).sort((a, b) => a - b);
        let cnt = 0;
        targets.forEach(target => {
            let result = binarySearch(currents, target);
            cnt += result;
        })
        console.log(cnt)
        n -= 1;
        i += 3;
    }
}


solution(input);

