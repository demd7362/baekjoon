n = int(input())


dp = [0] * 10001
dp[0:8] = [1, 1, 2, 3, 4, 5, 7, 8]

j = 2
k = 0
for i in range(8, 10001):
    if k == 4:
        j += 1
    elif k == 5:
        j -= 1
    elif k == 6:
        k = 0
        j += 1

    dp[i] = dp[i - 1] + j
    k += 1
for _ in range(n):
    print(dp[int(input())])