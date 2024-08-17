import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, m = map(int, input().split())

coins = [int(input()) for _ in range(n)]
dp = [0] * (m + 1)
dp[0] = 1
for coin in coins:
    for i in range(coin, m + 1):  # m =>만들고자하는 금액, 1부터 순회하면 1부터 m 까지의 경우의수도 더하게되버림
        dp[i] += dp[i - coin]

print(dp[m])
