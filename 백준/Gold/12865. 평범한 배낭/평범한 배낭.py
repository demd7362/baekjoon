import sys
import os

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

# n 물품의 수 k 최대 무게
n, k = map(int, input().split())

weights = [0]
values = [0]
for _ in range(n):
    weight, value = map(int, input().split())
    weights.append(weight)
    values.append(value)

dp = [[0] * (k + 1) for _ in range(n + 1)]
for i in range(1, n + 1):
    for j in range(1, k + 1):
        dp[i][j] = dp[i - 1][j]
        if j >= weights[i]:
            dp[i][j] = max(dp[i][j], dp[i - 1][j - weights[i]] + values[i])

print(dp[n][k])
