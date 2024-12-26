const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")


function solution([n, potionPrices, ...args]) {
  n = +n
  let discounts = []
  potionPrices = potionPrices.split(' ').map(Number)
  for (let i = 0; i < args.length; i++) {
    let p = args[i]
    let tmp = []
    for (var j = 1; j <= p; j++) {
      tmp.push(args[i + j].split(' ').map(Number))
    }
    i += j - 1
    discounts.push(tmp)
  }

  let min = Infinity
  let handleDiscount = (potionPrices, index) => {
    potionPrices = [...potionPrices]
    let discount = discounts[index]
    for (let [targetPotion, dcPrice] of discount) {
      potionPrices[targetPotion - 1] = Math.max(1, potionPrices[targetPotion - 1] - dcPrice)
    }
    return potionPrices
  }

  function dfs(depth, currentPrices, visited, sum) {
    if (depth === n) {
      min = Math.min(min, sum);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      const newPrices = handleDiscount(currentPrices, i);
      dfs(depth + 1, newPrices, visited, sum + newPrices[i]);
      visited[i] = false;
    }
  }

  dfs(0,potionPrices, Array(n).fill(false),0);
  console.log(min)

}

solution(input)
