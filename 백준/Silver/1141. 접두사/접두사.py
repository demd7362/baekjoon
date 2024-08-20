import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
words = [input() for _ in range(n)]
words.sort()

cnt = 0
for i in range(n):
    curr = words[i]
    is_prefix = False
    for j in range(i + 1, n):
        if i == j:
            continue
        target = words[j]
        if target.startswith(curr):
            is_prefix = True
            break
    if not is_prefix:
        cnt += 1
print(cnt)
