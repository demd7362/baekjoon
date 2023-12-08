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

function solution([n, ...informations]) {
    const newInfo = informations.map((info,index) => {
        const [age,name] = info.split(' ');
        return {
            age: Number(age),
            name,
            order: index
        }
    })
    newInfo.sort((a,b)=>{
        if(a.age < b.age){
            return -1;
        } else if(a.age > b.age){
            return 1;
        } else {
            if(a.order < b.order){
                return -1;
            } else if(a.order > b.order){
                return 1;
            }
        }
        return 0;
    }).forEach(i => {
        console.log(`${i.age} ${i.name}`);
    })


}


solution(input); // 2 2 1 3 1 1
