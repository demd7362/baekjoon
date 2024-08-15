import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

N, L, R, X = map(int, input().split())
problems = list(map(int, input().split()))

cnt = 0


def backtrack(selected_problems, start):
    global cnt
    if len(selected_problems) >= 2:
        total_sum = sum(selected_problems)
        if L <= total_sum <= R and max(selected_problems) - min(selected_problems) >= X:
            cnt += 1

    for i in range(start, N):
        backtrack(selected_problems + [problems[i]], i + 1)


backtrack([], 0)

print(cnt)
