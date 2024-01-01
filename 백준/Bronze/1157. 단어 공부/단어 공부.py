import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = input()

dict = {}
for char in n:
    dict[char.upper()] = dict.get(char.upper(), 0) + 1

items = list(dict.items())

items.sort(key=lambda x: x[1], reverse=True)


if len(items) > 1 and items[0][1] == items[1][1]:
    print('?')
else:
    print(items[0][0])
