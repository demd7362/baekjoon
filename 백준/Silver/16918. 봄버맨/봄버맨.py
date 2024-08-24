import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

r, c, n = map(int, input().split())
board = [list(input()) for _ in range(r)]
bomb_filled = [['O'] * c for _ in range(r)]

boom_directions = [(1, 0), (0, 1), (-1, 0), (0, -1)]

if n <= 1:
    for b in board:
        print(''.join(b))
    exit()
if n % 2 == 0:
    for b in bomb_filled:
        print(''.join(b))
    exit()


def boom(board):
    new_board = [['O'] * c for _ in range(r)]
    for i in range(r):
        for j in range(c):
            if board[i][j] == 'O':
                new_board[i][j] = '.'
                for dx, dy in boom_directions:
                    nx = i + dx
                    ny = j + dy
                    if 0 <= nx < r and 0 <= ny < c:
                        new_board[nx][ny] = '.'

    return new_board


if n % 4 == 3:
    board = boom(board)
    for b in board:
        print(''.join(b))
else:
    for b in boom(boom(board)):
        print(''.join(b))
