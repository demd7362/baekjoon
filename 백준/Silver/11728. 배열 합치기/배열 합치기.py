import sys
import os

# 운영 체제 확인
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

# 파일에서 여러 줄 읽기
args = sys.stdin.read().splitlines()


def solution(nm, array1, array2):
    A = list(map(int, array1.split()))
    B = list(map(int, array2.split()))

    answer = A + B

    answer.sort()

    print(' '.join(map(str, answer)))


solution(*args)
