const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
console.log(solution(input))

function solution(kg){
    let cnt = 0;
    const addCntByKg = (kgValue) => {
        if(kg - kgValue >= 0){
            kg -= kgValue;
            cnt++;
        } else {
            throw new Error('-1 return');
        }
    }
    while(kg % 5 !== 0){
        try {
            addCntByKg(3);
        } catch (e){
            return -1;
        }
    }
    while(true){
        if(kg === 0) {
            return cnt;
        }
        try {
            addCntByKg(5);
        } catch (e){
            return -1;
        }
    }
}

