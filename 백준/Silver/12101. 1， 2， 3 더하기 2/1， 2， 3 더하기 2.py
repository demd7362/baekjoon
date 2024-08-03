import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, k = map(int, input().split())


def solve():
    formulas = []

    def backtrack(value, formula):
        if value > n:
            return
        elif value == n:
            formulas.append(formula[0:len(formula) - 1])
            return
        for i in range(1, 4):
            backtrack(value + i, formula + f'{i}+')

    backtrack(0, '')
    formulas.sort()
    print(formulas[k - 1] if len(formulas) > k - 1 else - 1)


solve()
