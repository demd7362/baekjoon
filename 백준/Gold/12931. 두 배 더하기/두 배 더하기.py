import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
b = list(map(int , input().split()))

cnt = 0
while True:
    if all(e == 0 for e in b):
        break
    has_odd = False
    for i in range(n):
        if b[i] % 2 == 1:
            b[i] -= 1
            has_odd = True
            break
    if has_odd:
        cnt += 1
    else:
        for i in range(n):
            b[i] /= 2
        cnt += 1


print(cnt)
