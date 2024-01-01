import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())


def fn(r, w):
    word = ''
    for _ in range(r):
        word += w
    return word


for i in range(n, 0, -1):
    ans = fn(i - 1, ' ') + fn(n - i + 1, '*')
    print(ans)
