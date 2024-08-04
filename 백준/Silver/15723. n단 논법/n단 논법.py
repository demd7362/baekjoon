import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())

dic = {}
for i in range(n):
    first, _is, second = input().split()
    dic[first] = second

m = int(input())

for i in range(m):
    first, _is, second = input().split()

    key = first
    while dic.get(key) != second and key is not None:
        key = dic.get(key)
    if dic.get(key) == second:
        print('T')
    else:
        print('F')


