const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim());

function solution([_,...args]) {
    for (let i = 0; i < args.length; i += 2) {
        const [n, m] = args[i].split(' ').map(Number);
        // n 문서의 개수
        // m 궁금한 문서가 몇번째 인덱스에 있는지
        const priorities = args[i + 1].split(' ').map(Number); // 문서별 중요도
        const target = priorities[m];
        let printed = 0;
        const queue = priorities.map((el,i) => ({value:el, index:i}));
        while(queue.length > 0){
            const {index:currentIndex, value:currentValue} = queue.shift();
            const biggerElement = queue.find(el => el.value > currentValue);
            if(biggerElement){
                queue.push({
                    index: currentIndex,
                    value: currentValue
                });
            } else {
                printed++;
                if(currentValue === target && m === currentIndex){
                    break;
                }
            }
        }
        console.log(printed);
    }
}


solution(input);
