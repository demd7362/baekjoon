import os
import sys
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())

commands = [input() for _ in range(n)]

q = deque()
i = 0


for command in commands:
    if command.startswith('3'):
        if len(q) > 1:
            left_val = q.popleft()
            right_val = q.pop()
            if left_val['created'] > right_val['created']:
                q.append(right_val)
            else:
                q.appendleft(left_val)
        elif q:
            q.pop()
        continue
    [number, word] = command.split()

    if number == '1':
        q.append({
            'word': word,
            'created': i
        })
    elif number == '2':
        q.appendleft({
            'word': word,
            'created': i
        })
    i += 1

if q:
    print(''.join(map(lambda x: x['word'], q)))
else:
    print(0)




