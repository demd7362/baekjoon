import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

# 1
# 10
# 55
# 220
# 715
# 2002
# 5005
# 11440
dp = [[1 for _ in range(65)] for _ in range(10)]

for i in range(1,10):
    for j in range(1,65):
        dp[i][j] = dp[i-1][j] + dp[i][j-1]

n = int(input())
for i in range(n):
    print(dp[9][int(input())])
