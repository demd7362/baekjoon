const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

function solution([n, ...args]) {
    args = args.map(arg => arg.split(' '))
    args.push(['0', '48:00'])
    const teams = {
        '1': {
            score: 0,
            minutes: 0,
            startTime: null
        },
        '2': {
            score: 0,
            minutes: 0,
            startTime: null
        }
    }
    const getWinningTeam = () => {
        if (teams["1"].score > teams["2"].score) {
            return 1
        } else if (teams["2"].score > teams["1"].score) {
            return 2
        } else {
            return 0
        }
    }
    const getTimeDiff = (prevTime, newTime) => {
        const [hh1, mm1] = prevTime.split(':').map(Number)
        const prevMinutes = hh1 * 60 + mm1
        const [hh2, mm2] = newTime.split(':').map(Number)
        const newMinutes = hh2 * 60 + mm2
        return Math.abs(newMinutes - prevMinutes)
    }
    const minutesToString = (minutes) => {
        const mm = minutes % 60
        const hh = Math.floor(minutes / 60)
        return `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`
    }
    let prevWinningTeam = 0
    for (const arg of args) {
        const [teamNo, time] = arg
        if (teamNo !== '0') {
            teams[teamNo].score += 1
        }
        const newWinningTeam = getWinningTeam()
        if (newWinningTeam !== 0) {
            teams[newWinningTeam].startTime ??= time
        }
        if (prevWinningTeam !== newWinningTeam || teamNo === '0') { // 이기고 있던 팀이 바뀜
            if (prevWinningTeam !== 0) {
                const diff = getTimeDiff(teams[prevWinningTeam].startTime, time) // 여태까지의 시간 diff를 구함
                teams[prevWinningTeam].minutes += diff // 더함
                teams[prevWinningTeam].startTime = null
            }
            prevWinningTeam = newWinningTeam // 이기고 있던 팀 변경

        }

    }
    console.log(minutesToString(teams['1'].minutes))
    console.log(minutesToString(teams['2'].minutes))
}

solution(input)
