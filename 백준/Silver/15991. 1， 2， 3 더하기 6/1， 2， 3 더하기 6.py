import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
numbers = [int(input()) for _ in range(n)]

last = 100001
mod = 1_000_000_009

dp = [0] * (last + 2)
dp[1], dp[2], dp[3], dp[4], dp[5] = 1, 2, 2, 3, 3

for i in range(6, last + 1, 2):
    dp[i] = (dp[i - 1] + dp[i - 3] + dp[i - 5]) % mod
    dp[i + 1] = dp[i]

for number in numbers:
    print(dp[number])