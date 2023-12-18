import sys
import os

# 운영 체제 확인
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

args = input()


def solution(param):
    param = list(param)
    sorted_param = sorted(param, reverse=True)
    answer = ''.join(sorted_param)
    print(answer)


solution(args)
