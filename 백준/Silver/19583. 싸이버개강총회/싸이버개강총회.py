import os
import sys
from collections import defaultdict

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

data = sys.stdin.read()
args = data.split('\n')
[seq, *rest, _] = args


def time_to_number(time: str):
    return int(time.replace(':', ''))


s, e, q = map(lambda x: time_to_number(x), seq.split())


def check_time(time: str):
    time = time_to_number(time)
    if time <= s:
        return 's'
    if e <= time <= q:
        return 'q'
    return None

enter = set()
answer = 0
for arg in rest:
    t, n = arg.split()
    result = check_time(t)
    if not result:
        continue
    if result == 's':
        enter.add(n)
    elif result == 'q':
        if n in enter:
            answer += 1
            enter.remove(n)
print(answer)


