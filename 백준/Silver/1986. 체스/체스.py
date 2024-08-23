import os
import sys
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

r, c = map(int, input().split())
queen_cnt, *queens = map(int, input().split())
knight_cnt, *knights = map(int, input().split())
pawn_cnt, *pawns = map(int, input().split())
# . 빈칸 ! 잡음
board = [['.' for j in range(c)] for i in range(r)]
for i in range(0, len(pawns), 2):
    board[pawns[i] - 1][pawns[i + 1] - 1] = 'P'
for i in range(0, len(queens), 2):
    x, y = queens[i] - 1, queens[i + 1] - 1
    board[x][y] = 'Q'
for i in range(0, len(knights), 2):
    x, y = knights[i] - 1, knights[i + 1] - 1
    board[x][y] = 'K'



def is_blocked(x, y):
    return board[x][y] == 'K' or board[x][y] == 'P' or board[x][y] == 'Q'


for i in range(0, len(queens), 2):
    x, y = queens[i] - 1, queens[i + 1] - 1
    for j in range(x - 1, -1, -1):
        if is_blocked(j, y):  # 왼쪽
            break
        board[j][y] = '!'
    for j in range(x + 1, r):  # 오른쪽
        if is_blocked(j, y):
            break
        board[j][y] = '!'
    for j in range(y - 1, -1, -1):  # 위
        if is_blocked(x, j):
            break
        board[x][j] = '!'
    for j in range(y + 1, c):  # 아래
        if is_blocked(x, j):
            break
        board[x][j] = '!'
    # 왼쪽 위 대각선
    j, k = x - 1, y - 1
    while j >= 0 and k >= 0:
        if is_blocked(j, k):  # 장애물 검사
            break
        board[j][k] = '!'
        j -= 1
        k -= 1

    # 오른쪽 위 대각선
    j, k = x - 1, y + 1
    while j >= 0 and k < c:
        if is_blocked(j, k):  # 장애물 검사
            break
        board[j][k] = '!'
        j -= 1
        k += 1

    # 왼쪽 아래 대각선
    j, k = x + 1, y - 1
    while j < r and k >= 0:
        if is_blocked(j, k):  # 장애물 검사
            break
        board[j][k] = '!'
        j += 1
        k -= 1

    # 오른쪽 아래 대각선
    j, k = x + 1, y + 1
    while j < r and k < c:
        if is_blocked(j, k):  # 장애물 검사
            break
        board[j][k] = '!'
        j += 1
        k += 1

# for b in board:
#     print(b)

knight_directions = [(-2, -1), (-1, -2), (-2, 1), (-1, 2), (2, -1), (1, -2), (2, 1), (1, 2)]
q = deque()
for i in range(0, len(knights), 2):
    x, y = knights[i] - 1, knights[i + 1] - 1
    for dx, dy in knight_directions:
        nx = dx + x
        ny = dy + y
        if nx < 0 or ny < 0 or nx >= r or ny >= c:
            continue
        board[nx][ny] = '!'

#
# visited = [[False] * c for i in range(r)]
# def bfs():
#     while q:
#         x, y = q.popleft()
#         if visited[x][y]:
#             continue
#         visited[x][y] = True
#         for dx, dy in knight_directions:
#             nx = dx + x
#             ny = dy + y
#             if nx < 0 or ny < 0 or nx >= r or ny >= c or visited[nx][ny]:
#                 continue
#             if board[nx][ny] == '.':  # 빈 칸만 안전하지 않음으로 표시
#                 board[nx][ny] = '!'
#             q.append((nx, ny))
#

# bfs()

# for b in board:
#     print(b)
safe_count = 0
for i in range(r):
    for j in range(c):
        if board[i][j] == '.':  # 빈 칸이면서 안전한 칸
            safe_count += 1
print(safe_count)
