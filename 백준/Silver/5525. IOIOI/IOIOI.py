import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
length = int(input())
word = input()


def get_target(n):
    s = 'I'
    while n:
        s += 'O'
        s += 'I'
        n -= 1
    return s


target = get_target(n)
index = word.find(target)

cnt = 0
while index != -1:
    word = word[index + 2:]
    index = word.find(target)
    cnt += 1

print(cnt)
