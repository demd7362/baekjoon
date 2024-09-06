import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
mod = 9901
if n == 1:
    print(3)
    exit()
elif n == 2:
    print(7)
    exit()
elif n == 3:
    print(17)
    exit()
dp = [0 for i in range(n + 1)]
dp[0] = 3
dp[1] = 7
dp[2] = 17
for i in range(3, n + 1):
    dp[i] = (dp[i - 2] + dp[i - 1] * 2) % mod
print(dp[n - 1])
