import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

word = input()
n = len(word)

words = set()
visited = [False] * n


def check_word(s):
    for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
            return False
    return True


cnt = 0


def backtrack(s):
    if len(s) == n:
        words.add(s)
        return

    for i in range(n):
        if visited[i]:
            continue
        new_word = s + word[i]
        visited[i] = True
        backtrack(new_word)
        visited[i] = False


set_ = set(word)




if len(set_) == n:
    dp = [1] * (n + 1)
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] * i
    print(dp[n])
else:
    backtrack('')
    for word in words:
        if check_word(word):
            cnt += 1
    print(cnt)
