import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

args = list(map(lambda x: x.strip(), sys.stdin.readlines()))

for arg in args:
    A, B = map(int, arg.split())
    if A is 0 and B is 0: break
    print(A + B)
