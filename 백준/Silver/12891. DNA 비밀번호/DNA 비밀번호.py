import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, m = map(int, input().split())

word = input()

a, c, g, t = list(map(int, input().split()))

left = 0
right = 0

required = {
    'A': a,
    'C': c,
    'G': g,
    'T': t
}


def check(dic):
    return all(v <= 0 for v in dic.values())


cnt = 0
while right < n:

    required[word[right]] -= 1
    right += 1
    if right - left == m:
        result = check(required)
        if result:
            cnt += 1
        required[word[left]] += 1
        left += 1


print(cnt)
