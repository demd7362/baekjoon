import os
import sys
from collections import *

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

input = sys.stdin.read
data = input().split()

n, d, k, coupon = map(int, data[:4])
sushis = list(map(int, data[4:]))
counter = defaultdict(int)

left = 0
right = k - 1
for i in range(k - 1):
    counter[sushis[i]] += 1

answer = 0
while left < n:
    counter[sushis[right % n]] += 1
    right += 1
    if right - left == k:
        count = len(counter)
        if coupon not in counter:
            count += 1
        answer = max(answer, count)
    if counter[sushis[left]] == 1:
        counter.pop(sushis[left % n])
    else:
        counter[sushis[left]] -= 1
    left += 1
print(answer)
