import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

r, c = map(int, input().split())

board = [list(map(int, input())) for _ in range(r)]

cnt = 0


def reverse(x, y):
    global cnt
    cnt += 1
    for i in range(x + 1):
        for j in range(y + 1):
            if board[i][j] == 0:
                board[i][j] = 1
            else:
                board[i][j] = 0


def solve():
    for i in range(r - 1, -1, -1):
        for j in range(c - 1, -1, -1):
            if board[i][j] == 1:
                reverse(i, j)


solve()
print(cnt)
