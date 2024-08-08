import os
import sys
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

# n = int(input())
directions = [(1, 0), (0, 1), (-1, 0), (0, -1)]
answers = []


def bfs(board, r, c):
    q = deque()
    fire_visited = [[False] * c for _ in range(r)]
    person_visited = [[False] * c for _ in range(r)]

    start = ()
    for i in range(r):
        for j in range(c):
            if board[i][j] == 'J':
                if i == r - 1 or j == c - 1 or i == 0 or j == 0:
                    print(1)
                    return
                person_visited[i][j] = True
                start = (i, j, 1)
            elif board[i][j] == 'F':
                fire_visited[i][j] = True
                q.append((i, j, -1))
    q.append(start)
    while q:
        x, y, cnt = q.popleft()
        if (x == 0 or y == 0 or x == r - 1 or y == c - 1) and cnt > 1:
            print(cnt)
            return
        for dx, dy in directions:
            nx = dx + x
            ny = dy + y
            if nx < 0 or ny < 0 or nx >= r or ny >= c:
                continue
            if cnt == -1:
                if not fire_visited[nx][ny] and board[nx][ny] == '.':
                    fire_visited[nx][ny] = True
                    board[nx][ny] = 'F'
                    q.append((nx, ny, -1))
            else:
                if not person_visited[nx][ny] and board[nx][ny] == '.':
                    person_visited[nx][ny] = True
                    q.append((nx, ny, cnt + 1))

    print('IMPOSSIBLE')


r,c = map(int, input().split())
board = [[*input()] for i in range(r)]
bfs(board, r, c)
