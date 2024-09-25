import os
import sys
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
words = [input() for _ in range(n)]


def solve(password):
    left, right = [], []
    for char in password:
        if char == '<':
            if left:
                right.append(left.pop())
        elif char == '>':
            if right:
                left.append(right.pop())
        elif char == '-':
            if left:
                left.pop()
        else:  # 입력 시
            left.append(char)
    print(''.join(left + list(reversed(right))))


for word in words:
    solve(word)
