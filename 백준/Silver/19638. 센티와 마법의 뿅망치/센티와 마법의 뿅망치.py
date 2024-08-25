import heapq
import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, centi, o_count = map(int, input().split())
numbers = [int(input()) for _ in range(n)]
q = []
for number in numbers:
    heapq.heappush(q, (-number, number))

if q[0][1] < centi:
    print('YES')
    print(0)
    exit()

count = o_count
while count and q:
    minus,plus = heapq.heappop(q)
    if plus == 1:
        count -= 1
        continue
    if plus < centi:
        break
    new_value = plus // 2
    heapq.heappush(q, (-new_value, new_value))
    count -= 1

if not q:
    print('NO')
    print(o_count - count)
    exit()

_, value = heapq.heappop(q)
if value < centi:
    print('YES')
    print(o_count - count)
else:
    print('NO')
    print(value)
