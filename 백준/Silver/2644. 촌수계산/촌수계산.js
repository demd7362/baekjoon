const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";


let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(x => x.trim())

/*
사람들은 1, 2, 3, …, n (1 ≤ n ≤ 100)의 연속된 번호로 각각 표시된다.
입력 파일의 첫째 줄에는 전체 사람의 수 n이 주어지고,
둘째 줄에는 촌수를 계산해야 하는 서로 다른 두 사람의 번호가 주어진다.
그리고 셋째 줄에는 부모 자식들 간의 관계의 개수 m이 주어진다.
넷째 줄부터는 부모 자식간의 관계를 나타내는 두 번호 x,y가 각 줄에 나온다.
이때 앞에 나오는 번호 x는 뒤에 나오는 정수 y의 부모 번호를 나타낸다.

각 사람의 부모는 최대 한 명만 주어진다.
 */
function solution([n, numbers, m, ...rest]) {
    n = Number(n);
    const graph = {};
    for (const arg of rest) {
        const [x, y] = arg.split(' ').map(Number);
        graph[x] = [...graph[x] ?? [], y];
        graph[y] = [...graph[y] ?? [], x];
    }
    
    const bfs = (startNode, targetNode) => {
        const queue = [startNode];
        const visited = new Array(n).fill(false);
        const chon = new Array(n).fill(0);
        let found = false;
        loop:
        while (queue.length > 0) {
            const curr = queue.shift();
            if (visited[curr - 1]) continue;
            visited[curr - 1] = true;
            const joinNodes = graph[curr];
            for (const joinNode of joinNodes) {
                if (!visited[joinNode - 1]) {
                    chon[joinNode-1] = chon[curr-1]+1;
                    if (joinNode === targetNode) {
                        found = true;
                        break loop;
                    } else {
                        queue.push(joinNode);
                    }
                }
            }
        }
        console.log(found ? Math.max(...chon) : -1);
    }

    const [startNode, targetNode] = numbers.split(' ').map(Number);
    bfs(startNode, targetNode)
}

solution(input)



