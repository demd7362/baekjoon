import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())

dp = [0, 1]

for i in range(2, n + 1):
    dp.append(dp[i - 2] + dp[i - 1])

print(dp[n])
