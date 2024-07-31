import sys
import os
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, m = map(int, input().split())
map = [list(map(int, list(input()))) for i in range(m)]
directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
dp = [[float('inf')] * n for i in range(m)]
dp[0][0] = 0
deque = deque()
deque.append([0, 0, 0])

while deque:
    x, y, weight = deque.popleft()
    if weight > dp[x][y]:
        continue
    for dx, dy in directions:
        nx = dx + x
        ny = dy + y
        if nx < 0 or ny < 0 or nx >= m or ny >= n:
            continue
        new_weight = weight + map[nx][ny]
        if new_weight >= dp[nx][ny]:
            continue
        dp[nx][ny] = new_weight
        if map[nx][ny]:
            deque.append([nx, ny, new_weight])
        else:
            deque.appendleft([nx, ny, new_weight])

print(dp[m - 1][n - 1])
