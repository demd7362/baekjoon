import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())


dp = [0] * 10002
dp[0] = 1
dp[1] = 1
dp[2] = 2
dp[3] = 3
dp[4] = 4
dp[5] = 5
dp[6] = 7
dp[7] = 8

j = 2
k = 0
for i in range(8, 10001):
    if k == 4:
        j += 1
    elif k == 5:
        j -= 1
    elif k == 6:
        k = 0
        j += 1

    dp[i] = dp[i - 1] + j
    k += 1
for _ in range(n):
    print(dp[int(input())])