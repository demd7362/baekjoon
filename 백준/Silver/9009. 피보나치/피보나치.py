import os
import sys
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')


def fibo(n):
    if n == 0:
        return [0]
    if n == 1:
        return [0, 1]
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 2] + dp[i - 1]
    return dp


cnt = int(input())

fibo_list = fibo(44)
results = []
for _ in range(cnt):
    n = int(input())
    q = deque()
    while n:
        for i in range(len(fibo_list) - 1, -1, -1):
            value = fibo_list[i]
            if value <= n:
                q.appendleft(str(fibo_list[i]))
                n -= fibo_list[i]
                break
    results.append(' '.join(q))
print('\n'.join(results))
