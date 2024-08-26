import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

data = sys.stdin.read()
t = int(data[:1])
numbers = list(map(int, data.split()[1:]))
mod = 1234567
for number in numbers:
    dp = [1 for _ in range(10)]
    for _ in range(1, number):
        arr = dp[:]
        dp[0] = arr[7]
        dp[1] = arr[2] + arr[4]
        dp[2] = arr[1] + arr[3] + arr[5]
        dp[3] = arr[2] + arr[6]
        dp[4] = arr[1] + arr[5] + arr[7]
        dp[5] = arr[2] + arr[4] + arr[6] + arr[8]
        dp[6] = arr[3] + arr[5] + arr[9]
        dp[7] = arr[4] + arr[8] + arr[0]
        dp[8] = arr[5] + arr[7] + arr[9]
        dp[9] = arr[6] + arr[8]
    print(sum(dp) % mod)
