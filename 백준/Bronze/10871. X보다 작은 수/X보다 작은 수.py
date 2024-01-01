import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

N, X = map(int, input().split())

arr = list(map(int, input().split()))

ans = [str(number) for number in arr if number < X]

print(' '.join(ans))
