import sys
import os

# 운영 체제 확인
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

# 파일에서 여러 줄 읽기
args = sys.stdin.read().splitlines()


def solution(n):
    n = int(n)
    if n == 0:
        print(0)
        return
    elif n == 1 or n == 2:
        print(1)
        return
    dp = [0, 1, 1]
    for i in range(3, n + 1):
        dp.append(dp[i - 2] + dp[i - 1])

    print(dp[len(dp) - 1])


solution(*args)
