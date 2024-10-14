import os
import sys
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())

for _ in range(n):
    num = int(input())
    card = list(map(str, input().split()))
    word = deque([card[0]])

    for char in card[1:]:
        if char > word[0]:
            word.append(char)
        else:
            word.appendleft(char)
    print(''.join(word))

