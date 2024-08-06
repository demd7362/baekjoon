import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())

words = [input() for i in range(n)]

dic = {}
none_list = []


def replace(s, index):
    new_str = f'[{s[index]}]'
    return s[:index] + new_str + s[index + 1:]


order = 0
for i in range(n):
    word = words[i]
    parts = word.split()
    saved = False
    j = 0
    for part in parts:  # new / window
        origin_char = part[0]
        char = origin_char.lower()
        result = dic.get(char)
        if result is None:  # map에 head로 시작하는 단어가 없다면 넣음
            dic[char] = {
                'word': word,
                'index': j,
                'order': order
            }
            saved = True
            break
        j += len(part) + 1
    if not saved:
        k = 0
        for origin_char in word:
            if origin_char == ' ':
                k += 1
                continue
            char = origin_char.lower()
            result = dic.get(char)
            if result is None:
                dic[char] = {
                    'word': word,
                    'index': k,
                    'order': order
                }
                saved = True
                break
            k += 1
    if not saved:
        none_list.append({
            'word': word,
            'index': -1,
            'order': order
        })
    order += 1

arr = [{'word': replace(value.get('word'), value.get('index')), 'order': value.get('order')} for value in dic.values()]
arr += none_list
arr.sort(key=lambda x: x.get('order'))
for el in arr:
    print(el.get('word'))
