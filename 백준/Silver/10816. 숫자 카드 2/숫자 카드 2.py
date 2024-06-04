import sys
import os
from collections import Counter

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
cards = list(map(int, input().split()))
m = int(input())
args = list(map(int, input().split()))

dict = Counter(cards)

answer = list(map(lambda x: str(dict.get(x, 0)), args))

print(' '.join(answer))
