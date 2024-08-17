import os
import sys
from collections import defaultdict

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, m = map(int, input().split())

numbers = list(map(int, input().split()))

dic = defaultdict(int)

left = 0
right = 0
max_value = 0
while right < n:
    if dic[numbers[right]] < m:
        dic[numbers[right]] += 1
        right += 1
    else:
        dic[numbers[left]] -= 1
        left += 1

    max_value = max(max_value, right - left)


print(max_value)
