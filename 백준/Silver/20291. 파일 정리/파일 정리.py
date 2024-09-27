import os
import sys
from collections import defaultdict

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
files = [input() for _ in range(n)]
dic = defaultdict(int)
for file in files:
    index = file.index('.')
    ext = file[index + 1:]
    dic[ext] += 1

keys = sorted(list(dic.keys()))
for key in keys:
    print(key, dic[key])
