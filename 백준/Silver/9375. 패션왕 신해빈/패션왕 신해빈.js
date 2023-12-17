const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";


let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())

/*
첫째 줄에 테스트 케이스가 주어진다. 테스트 케이스는 최대 100이다.

각 테스트 케이스의 첫째 줄에는 해빈이가 가진 의상의 수 n(0 ≤ n ≤ 30)이 주어진다.
다음 n개에는 해빈이가 가진 의상의 이름과 의상의 종류가 공백으로 구분되어 주어진다. 같은 종류의 의상은 하나만 입을 수 있다.
모든 문자열은 1이상 20이하의 알파벳 소문자로 이루어져있으며 같은 이름을 가진 의상은 존재하지 않는다
 */
function isNumeric(n) {
    n = Number(n);
    return !isNaN(n);
}

function solution([n, ...rest]) {
    let map = {};
    n = Number(n);
    const answer = [];
    for (let i = 0; i < rest.length; i++) {
        const arg = rest[i];
        const isNumber = isNumeric(arg);
        if (isNumber) {
            let cnt = 1;
            for(const value of Object.values(map)){
                cnt *= value + 1;
            }
            answer.push(cnt - 1);
            map = {};
        } else {
            const [name,category ] = arg.split(' ');
            map[category] = (map[category] ?? 0) + 1;
        }
    }
    let cnt = 1;
    for(const value of Object.values(map)){
        cnt *= value + 1;
    }
    answer.push(cnt - 1);
    console.log(answer.slice(1).join('\n'))
}

solution(input)



