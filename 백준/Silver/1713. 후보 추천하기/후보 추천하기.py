import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())
m = int(input())
students = list(map(int, input().split()))

counter = {}
time = {}

for index, student in enumerate(students):
    if student in counter:
        counter[student] += 1
    else:
        if len(counter) >= n:
            # 추천 횟수가 가장 적은 학생 
            min_student = min(counter, key=lambda x: (counter[x], time[x]))
            # 해당 학생을 사진틀에서 삭제
            del counter[min_student]
            del time[min_student]

        counter[student] = 1
        time[student] = index

answer = sorted(counter.keys())
print(' '.join(map(str, answer)))
