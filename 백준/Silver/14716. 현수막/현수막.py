import os
import sys
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

r, c = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(r)]
visited = [[False] * c for _ in range(r)]
cnt = 0
directions = [(0, 1), (1, 0), (-1, 0), (0, -1), (1, 1), (-1, -1), (1, -1), (-1, 1)]


def bfs(sx, sy):
    global cnt
    q = deque()
    q.append([sx, sy])

    while q:
        x, y = q.popleft()
        if visited[x][y]:
            continue
        visited[x][y] = True
        for dx, dy in directions:
            nx, ny = dx + x, dy + y
            if nx < 0 or ny < 0 or nx >= r or ny >= c or visited[nx][ny] or board[nx][ny] == 0:
                continue
            q.append((nx, ny))


for i in range(r):
    for j in range(c):
        if board[i][j] == 1 and not visited[i][j]:
            bfs(i, j)
            cnt += 1
print(cnt)
