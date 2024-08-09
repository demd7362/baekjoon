import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

a, b = map(int, input().split())

length = len(str(a))
numbers = [*str(a)]
visited = [False] * length

max_val = 0


def backtrack(depth, n):
    global max_val
    if depth == length:
        if b > int(n) > max_val and not n.startswith('0'):
            max_val = int(n)
        # print(n)
        return
    for i in range(len(numbers)):
        if visited[i]:
            continue
        visited[i] = True
        backtrack(depth + 1, n + numbers[i])
        visited[i] = False


backtrack(0, '')
print(-1 if max_val == 0 else max_val)
