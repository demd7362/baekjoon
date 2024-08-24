import os
import sys
from collections import defaultdict

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, d, k, coupon = map(int, input().split())

sushis = [int(input()) for _ in range(n)]

counter = defaultdict(int)
for i in range(k - 1):
    counter[sushis[i]] += 1

left, right = 0, k - 1

ans = 0
while left < n:
    counter[sushis[right % n]] += 1
    right += 1
    if right - left == k:
        if coupon not in counter:
            val = len(counter) + 1
        else:
            val = len(counter)
        ans = max(ans, val)
        # print(counter)
        if counter[sushis[left % n]] == 1:
            counter.pop(sushis[left % n])
        else:
            counter[sushis[left % n]] -= 1
        left += 1

print(ans)
