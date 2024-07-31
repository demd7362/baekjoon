import heapq
import sys
import os

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())

min_heap = []
# 최소힙에 가장 큰 5개만 넣는다.
# 이미 5개가 들어있다면 0번째 인덱스값과 비교해서 현재값이 크다면 현재값을 넣는다
for i in range(n):
    inner = map(int, input().split())
    for j in inner:
        if len(min_heap) < n:
            heapq.heappush(min_heap, j)
        elif len(min_heap) == n and min_heap[0] < j:
            heapq.heapreplace(min_heap, j)
print(min_heap[0])
