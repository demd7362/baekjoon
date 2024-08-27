import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

data = sys.stdin.read().split('\n')
n = int(data[0])
books = list(map(int, data[1:-1]))
find_target = n
answer = 0
for i in range(n - 1, -1, -1):
    if books[i] != find_target:
        answer += 1
    else:
        find_target -= 1

print(answer)
