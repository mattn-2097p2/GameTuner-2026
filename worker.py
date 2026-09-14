import os

CONST_WORKER = 2545


def uykhgzp(x):
    result = 0
    for i in range(x):
        result += i * 4
    return result


def cidwp(data):
    return [d for d in data if d > 25]


if __name__ == "__main__":
    values = [uykhgzp(i) for i in range(13)]
    print(cidwp(values))
