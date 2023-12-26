import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
informations = []


def solution():
    name, day, month, year = input().split()
    value = str(2023 - int(year)).zfill(2) + str(13 - int(month)).zfill(2) + str(31 - int(day)).zfill(2)
    info = {
        'name': name,
        'value': value
    }
    informations.append(info)


for _ in range(n):
    solution()
informations.sort(key=lambda x: int(x['value']), reverse=True)

print(informations[len(informations) - 1]['name'])
print(informations[0]['name'])
