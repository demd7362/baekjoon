import sys
import os

# 운영 체제 확인
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

args = input()


def solution(param):
    num1, num2 = map(int, param)
    max_value = max(num1, num2)
    for i in range(max_value, 0, -1):
        if num1 % i == 0 and num2 % i == 0:
            break

    print(round(num1 * num2 / i))


solution(args.split())
