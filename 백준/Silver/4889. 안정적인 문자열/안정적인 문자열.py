import os
import sys
from collections import deque

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

seq = 1


def solve(s):
    global seq
    while s.count('{}') > 0:
        s = s.replace('{}', '')
    cnt = 0
    cnt += s.count('{{')
    s = s.replace('{{', '')
    cnt += s.count('}}')
    s = s.replace('}}', '')
    cnt += s.count('}{') * 2
    print(f'{seq}. {cnt}')
    seq += 1


while True:
    arg = input()
    if arg.startswith('-'):
        exit()
    else:
        solve(arg)
