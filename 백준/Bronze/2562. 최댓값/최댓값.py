import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

max_val = 0
index = 1
for i in range(9):
    arg = int(input())

    if arg > max_val:
        max_val = arg
        index = i + 1

print(max_val)
print(index)
