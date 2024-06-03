import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, m = map(int, input().split())

numbers = [i for i in range(1, n + 1)]
# 1 2 3 4 5 6 7 -> 3 6 2 7 5 1 4

answer = []
index = 0
while numbers:
    index = (index + m - 1) % len(numbers)
    answer.append(numbers[index])
    numbers.pop(index)

print(f'<{", ".join(map(str, answer))}>')
