import os
import sys
from collections import *

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
numbers = list(map(int, input().split()))
numbers.sort()

answer = 0
for index, target in enumerate(numbers):
    left = 0
    right = n - 1
    while left < right:
        sum_ = numbers[left] + numbers[right]
        if left == index:
            left += 1
            continue
        if right == index:
            right -= 1
            continue
        if sum_ == target and left != index and right != index:  # 현재 고려하는 숫자에 해당하는 숫자가 아니어야함
            answer += 1
            break
        elif sum_ < target:
            left += 1
        else:
            right -= 1


print(answer)
