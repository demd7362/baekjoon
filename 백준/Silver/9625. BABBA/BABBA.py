import sys
import os

# 운영 체제 확인
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

args = input()


def fibonacci(n):
    dp = [0, 1, 1, 2]
    for i in range(4, n + 1):
        dp.append(dp[i - 2] + dp[i - 1])

    print(dp[n - 1], dp[n])


fibonacci(int(args))
