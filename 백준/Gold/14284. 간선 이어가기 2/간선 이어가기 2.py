import heapq
import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')

n, m = map(int, input().split())
lines = [input() for _ in range(m)]
fr, to = map(int, input().split())

dp = [float('inf')] * (n + 1)
dp[fr] = 0
graph = [[] for i in range(n + 1)]
for line in lines:
    curr, target, weight = map(int, line.split())
    graph[curr].append((target, weight))
    graph[target].append((curr, weight))

q = [(0, fr)]

while q:
    curr_weight, curr_node = heapq.heappop(q)
    if curr_weight > dp[curr_node]:
        continue
    join_nodes = graph[curr_node]
    for node, weight in join_nodes:
        new_weight = weight + curr_weight
        if new_weight > dp[node]:
            continue
        heapq.heappush(q, (new_weight, node))
        dp[node] = new_weight

print(dp[to])
