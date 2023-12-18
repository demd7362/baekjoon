import sys
import os

# 운영 체제 확인
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

# 파일에서 여러 줄 읽기
args = sys.stdin.read().splitlines()


def solution(n, arr):
    numbers = map(int, arr)
    sorted_numbers = sorted(numbers, reverse=True)

    for number in sorted_numbers:
        print(number)


solution(int(args[0]), args[1:])
