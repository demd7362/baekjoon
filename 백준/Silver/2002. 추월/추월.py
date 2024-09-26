import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
enters = [input() for _ in range(n)]
exits = [input() for _ in range(n)]

enter_dict = {}
for i, enter_car in enumerate(enters):
    enter_dict[enter_car] = set([enters[j] for j in range(i)])
answer = 0

exit_dict = {}
for i, exit_car in enumerate(exits):
    front_set = enter_dict[exit_car]
    if not front_set:
        continue
    for j in range(i):
        front_car = exits[j]
        if front_car in front_set:
            front_set.remove(front_car)
    if len(front_set) > 0:
        answer += 1


print(answer)



