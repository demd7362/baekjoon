const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim());

function calculateWaterTrapped(heights) {
    let left = 0, right = heights.length - 1;
    let leftMax = 0, rightMax = 0;
    let trappedWater = 0;

    while (left < right) {
        if (heights[left] < heights[right]) {
            leftMax = Math.max(leftMax, heights[left]);
            trappedWater += leftMax - heights[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, heights[right]);
            trappedWater += rightMax - heights[right];
            right--;
        }
    }

    return trappedWater;
}

function solution(input) {
    let [hw, blockHeights] = input;
    blockHeights = blockHeights.split(' ').map(Number);

    console.log(calculateWaterTrapped(blockHeights));
}

solution(input);
