const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())


function solution([T, ...args]) {
    T = Number(T);
    // n 팀의 갯수, k 문제의 갯수 t 팀의 id m 엔트리의 갯수
    for (let i = 0; i < args.length; i++) {
        let [n, k, t, m] = args[i].split(' ').map(Number);
        solve(args.slice(i + 1, i + m + 1), n, k, t);
        if (i + m + 1 < args.length) {
            i += m;
        } else break;
    }

    function solve(entries, teamCount, problemCount, myId) {
        // 팀별 정보 초기화
        let teams = Array.from({ length: teamCount }, (_, id) => ({
            id: id + 1,
            scoreList: Array(problemCount + 1).fill(0),
            submitCount: 0,
            lastSubmit: -1,
            totalScore: 0,
        }));

        // 로그 엔트리 처리
        entries.forEach((entry, time) => {
            let [teamId, problemNum, score] = entry.split(' ').map(Number);
            let team = teams[teamId - 1];

            team.scoreList[problemNum] = Math.max(team.scoreList[problemNum], score);
            team.submitCount++;
            team.lastSubmit = time;
        });

        // 총 점수 계산
        teams.forEach(team => {
            team.totalScore = team.scoreList.reduce((acc, score) => acc + score, 0);
        });

        // 팀 정렬
        teams.sort((a, b) =>
            b.totalScore - a.totalScore ||
            a.submitCount - b.submitCount ||
            a.lastSubmit - b.lastSubmit
        );

       
        const myRank = teams.findIndex(team => team.id === myId) + 1;
        console.log(myRank);
    }
}

solution(input);
