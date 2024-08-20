import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
length = int(input())
word = input()


index = 0

cnt = 0
found = 0
while index < length:
    target = word[index:index + 3]
    if target == 'IOI':
        index += 2
        found += 1
        if found == n:
            cnt += 1
            found -= 1
    else:
        index += 1
        found = 0

print(cnt)
