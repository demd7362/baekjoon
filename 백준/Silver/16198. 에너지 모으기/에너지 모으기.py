import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
numbers = list(map(int, input().split()))

ans = 0


def dfs(current):
    global ans
    if len(numbers) == 2:
        ans = max(ans, current)
        return
    for i in range(1, len(numbers) - 1):
        target = numbers[i - 1] * numbers[i + 1]
        value = numbers.pop(i)
        dfs(current + target)
        numbers.insert(i, value)


dfs(0)
print(ans)
