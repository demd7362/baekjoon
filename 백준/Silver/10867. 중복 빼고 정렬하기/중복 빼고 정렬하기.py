import sys
import os

# 운영 체제 확인
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

# 파일에서 여러 줄 읽기
args = sys.stdin.read().splitlines()


def solution(n, *arg):
    new_set = set(map(int, ''.join(arg).split()))
    sorted_arr = sorted(new_set)
    for i in range(0, len(sorted_arr)):
        print(sorted_arr[i])


solution(*args)
