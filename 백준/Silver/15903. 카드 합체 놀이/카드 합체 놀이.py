import heapq
import os
import sys
from builtins import sum

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, m = map(int, input().split())
q = list(map(int, input().split()))
heapq.heapify(q)
while m:
    number = heapq.heappop(q)
    next = heapq.heappop(q)
    sum_val = number + next
    heapq.heappush(q, sum_val)
    heapq.heappush(q, sum_val)
    m -= 1

print(sum(q))
