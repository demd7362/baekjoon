import sys
import os

# 운영 체제 확인
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')


def solution(name, action):
    if action == 'enter':
        company[name] = True
    else:
        company[name] = False


company = {}
n = int(input())

for _ in range(n):
    event = input().split()
    name, action = event
    solution(name, action)

true_keys = sorted([key for key, value in company.items() if value],reverse=True)

print('\n'.join(true_keys))
