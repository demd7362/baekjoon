import sys
import os

# 운영 체제 확인 및 입력 파일 설정 (필요한 경우)
if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = input()

dict = {}
for i in range(len(n)):
    char = n[i]
    if dict.get(char) is None:
        dict[char] = i

alphabet_list = [chr(i) for i in range(ord('a'), ord('z') + 1)]

for char in alphabet_list:
    print(dict.get(char, -1))
