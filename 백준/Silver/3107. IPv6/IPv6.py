import os
import sys

if os.name == 'nt':  # Windows 환경
    sys.stdin = open('input.txt', 'r')


def zero_fill(numstr: str):
    while len(numstr) < 4:
        numstr = '0' + numstr
    return numstr


def find_target_part(dbcolon_index, s):
    end_index = 0
    for i in range(dbcolon_index, len(s)):
        char = s[i]
        if char == ':':
            end_index = i
    return s[dbcolon_index + 2: dbcolon_index + 2 + end_index]


def make(s: str):
    if s == '::':
        print('0000:0000:0000:0000:0000:0000:0000:0000')
        return

    if '::' in s:
        parts = s.split('::')
        left_part = parts[0].split(':') if parts[0] else []
        right_part = parts[1].split(':') if len(parts) > 1 else []

        left_part = [zero_fill(part) for part in left_part]
        right_part = [zero_fill(part) for part in right_part]

        missing_groups = 8 - (len(left_part) + len(right_part))

        full_address = left_part + ['0000'] * missing_groups + right_part
    else:
        full_address = [zero_fill(part) for part in s.split(':')]

    print(':'.join(full_address))



ip = input()
make(ip)
