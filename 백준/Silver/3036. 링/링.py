import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())

numbers = [int(number) for number in input().split()]


def gcd(a, b):
    if b == 0: return a
    return gcd(b, a % b)


for i in range(1, len(numbers)):
    gcd_value = gcd(numbers[0], numbers[i])
    ans = f'{int(numbers[0] / gcd_value)}/{int(numbers[i] / gcd_value)}'
    print(ans)
