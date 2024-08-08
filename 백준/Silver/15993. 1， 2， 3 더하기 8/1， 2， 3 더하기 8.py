import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n = int(input())

odd_dp = [0] * 100001
even_dp = [0] * 100001
odd_dp[0] = 0
odd_dp[1] = 1
odd_dp[2] = 1
odd_dp[3] = 2
even_dp[0] = 1
even_dp[1] = 0
even_dp[2] = 1
even_dp[3] = 2

mod = 1_000_000_009
for i in range(4, 100001):
    odd_dp[i] = (even_dp[i - 3] + even_dp[i - 2] + even_dp[i - 1]) % mod
    even_dp[i] = (odd_dp[i - 3] + odd_dp[i - 2] + odd_dp[i - 1]) % mod

results = []
for _ in range(n):
    i = int(input())
    results.append(f'{odd_dp[i]} {even_dp[i]}')

print('\n'.join(results))
