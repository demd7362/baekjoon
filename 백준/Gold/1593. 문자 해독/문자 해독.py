import os
import sys
from collections import defaultdict, Counter

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, m = map(int, input().split())
target = input()
word = input()
target_counter = Counter(target)

counter = defaultdict(int)


def check():
    for k, v in counter.items():
        if target_counter[k] != v:
            return False
    return True


left, right = 0, 0

ans = 0
while right < m:
    counter[word[right]] += 1
    right += 1
    if right - left == n:
        if check():
            ans += 1
        counter[word[left]] -= 1
        left += 1

print(ans)
