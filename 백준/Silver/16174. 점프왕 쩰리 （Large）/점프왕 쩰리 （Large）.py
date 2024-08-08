import os
import sys
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())

board = [list(map(int, input().split())) for _ in range(n)]
directions = ['하','우']


def bfs(start_x, start_y):
    q = deque()
    q.append([start_x,start_y])
    visited = [[False for _ in range(n)] for _ in range(n)]
    while q:
        x, y = q.popleft()
        if visited[x][y]:
            continue
        if x == n - 1 and y == n - 1:
            print('HaruHaru')
            return
        visited[x][y] = True
        for direction in directions:
            nx = x
            ny = y
            if direction == '하':
                ny += board[x][y]
            elif direction == '우':
                nx += board[x][y]
            if nx < 0 or ny < 0 or nx >= n or ny >= n or visited[nx][ny]:
                continue

            q.append([nx,ny])
    print('Hing')


bfs(0, 0)
