import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = map(int, input().split())

N, M = n

dictionary = {}
for _ in range(N):
    arg = input()
    dictionary[arg] = True

cnt = 0
for _ in range(M):
    word = input()
    if dictionary.get(word):
        cnt += 1

print(cnt)
