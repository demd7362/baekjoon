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
  function dfs(currentPrices, visited, totalCost) {
    if (visited.every(v => v)) {
      min = Math.min(min, totalCost);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      const newPrices = handleDiscount(currentPrices, i);
      dfs(newPrices, visited, totalCost + currentPrices[i]);
      visited[i] = false;
    }
  }

  dfs(potionPrices, Array(n).fill(false), 0);
  console.log(min)

}

solution(input)
