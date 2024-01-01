import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

N, M = map(int, input().split())

dictionary = {}
for _ in range(N):
    site, pwd = input().split()
    dictionary[site] = pwd


for _ in range(M):
    site = input()
    print(dictionary[site])
