import math
import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

N, M = map(int, input().split())


def factorial(n):
    value = 1
    for i in range(2, n + 1):
        value *= i
    return value


nCm = factorial(N) // (factorial(M) * factorial(N - M))
print(nCm)