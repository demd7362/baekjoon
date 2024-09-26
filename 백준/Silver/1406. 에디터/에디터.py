import os
import sys
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

password = input()
n = int(input())
commands = [input() for _ in range(n)]

left, right = [*password], []

for command in commands:
    if command[0] == 'L':  # 왼쪽 한칸
        if left:
            right.append(left.pop())
    elif command[0] == 'D':  # 오른쪽 한칸
        if right:
            left.append(right.pop())
    elif command[0] == 'B':  # 왼쪽 문자 삭제
        if left:
            left.pop()
    else:
        [_command, word] = command.split()
        left.append(word)
    # print(left,right)

right = list(reversed(right))
print(''.join(left + right))
