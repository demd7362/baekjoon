import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
enters = [input() for _ in range(n)]
enter_dict = {enter: i for i, enter in enumerate(enters)}
exits = [enter_dict[input()] for _ in range(n)]  # index 나간 순서 value 들어온 순서

answer = 0
for i in range(n):
    for j in range(i + 1, n):
        # print(f'exits[{i}]({exits[i]}) > exits[{j}]({exits[j]}) {exits[i] > exits[j]}')
        if exits[i] > exits[j]:
            # print(f'{enters[i]}는 추월함')
            answer += 1
            break
print(answer)
