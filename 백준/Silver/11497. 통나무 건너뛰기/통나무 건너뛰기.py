import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

cnt = int(input())


def solve(args, length):
    args.sort()
    new_args = [0] * length
    index = 0
    last_index = length - 1
    flag = True
    for arg in args:
        if flag:
            new_args[index] = arg
            index += 1
        else:
            new_args[last_index] = arg
            last_index -= 1
        flag = not flag
    max_diff = 0
    for i in range(length - 1):
        diff = abs(new_args[i] - new_args[i + 1])
        max_diff = max(max_diff, diff)
    print(max_diff)


for i in range(cnt):
    length = int(input())
    args = list(map(int, input().split()))
    solve(args, length)
