import heapq
import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

directions = [(1, 0), (0, 1), (-1, 0), (0, -1)]

problem_no = 0


def solve(n):
    board = [list(map(int, input().split())) for _ in range(n)]
    dp = [[float('inf')] * n for _ in range(n)]
    dp[0][0] = board[0][0]

    q = [(dp[0][0], 0, 0)]
    while q:
        weight, x, y = heapq.heappop(q)
        if weight > dp[x][y]:
            continue
        for dx, dy in directions:
            nx = dx + x
            ny = dy + y
            if nx < 0 or ny < 0 or ny >= n or nx >= n:
                continue
            new_weight = weight + board[nx][ny]
            if new_weight > dp[nx][ny] or dp[nx][ny] != float('inf'):
                continue
            heapq.heappush(q, (new_weight, nx, ny))
            dp[nx][ny] = new_weight
    print(f'Problem {problem_no}: {dp[n - 1][n - 1]}')


while True:
    n = int(input())
    if n == 0:
        break
    problem_no += 1
    solve(n)
