import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

d, value = map(int, input().split())

for i in range(1,100001):
    for j in range(1,100001):
        dp = [0] * d
        dp[0] = i
        dp[1] = j

        for k in range(2, d):
            dp[k] = dp[k - 1] + dp[k - 2]
        if dp[d - 1] == value:
            print(dp[0])
            print(dp[1])
            exit()
