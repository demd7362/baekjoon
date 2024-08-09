import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

mod = 1_000_000_007
n = int(input())
if n == 1:
    print(0)
    exit()
elif n == 2 or n == 3:
    print(1)
    exit()
elif n == 4:
    print(3)
    exit()
elif n == 5:
    print(5)
    exit()

dp = [0] * (n + 1)  # 인덱스 홀수일땐 + 1
dp[0] = 0
dp[1] = 1
dp[2] = 1
dp[3] = 3
dp[4] = 5

for i in range(5, n + 1):
    dp[i] = (sum(dp[:i]) + (1 if i % 2 == 1 else 0)) % mod

print(dp[n - 1])