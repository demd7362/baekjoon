import sys
import os

# 운영 체제 확인
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

args = input()


def solution(param):
    count_0, count_1 = 0, 0
    if param[0] == '0':
        count_0 += 1
    else:
        count_1 += 1

    for i in range(len(param) - 1):
        if param[i] != param[i + 1]:
            if param[i] == '1':
                count_0 += 1
            else:
                count_1 += 1
    print(min(count_0, count_1))


solution(args)
