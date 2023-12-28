import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

arg = input()
arr = []

for i in range(len(arg) - 1, -1, -1):
    arr.append(arg[i:])

arr.sort()

print('\n'.join(arr))
