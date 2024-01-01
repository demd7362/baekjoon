const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    // .split('\n')
    // .map(x => x.trim());


function solution(arg) {
    const [hours,minutes] = arg.split(' ').map(Number);
    const hoursToMinutes = (hours) => {
        if(hours === 0) hours = 24;
        return hours * 60;
    }
    const minutesToTime = (minutes) => {
        return {
            hours: Math.floor(minutes / 60),
            minutes: minutes % 60
        }
    }
    const totalMinutes = hoursToMinutes(hours) + minutes - 45;
    const time = minutesToTime(totalMinutes);
    console.log(`${time.hours % 24} ${time.minutes}`)
}

solution(input);
