import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

word = input()

s = set()
for i in range(len(word)):
    for j in range(i + 1, len(word) + 1):
        s.add(word[i: j])
print(len(s))
