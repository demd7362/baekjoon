import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
numbers = sorted(list(map(int, input().split())))
x = int(input())

count = 0
left, right = 0, n - 1

while left < right:
    sum = numbers[left] + numbers[right]

    if sum == x:
        count += 1
        left += 1
        right -= 1
    elif sum < x:
        left += 1
    else:
        right -= 1
print(count)
