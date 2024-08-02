import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

arr = [10, 55, 220]  # , 715, 2002, 5005, 11440, 24310


def solution(n):
    dp = [[1] * 1001 for _ in range(0, 1001)]
    for i in range(1, 1001):
        for j in range(1, 1001):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    print(dp[9][n] % 10007)


arg = int(input())

solution(arg)
