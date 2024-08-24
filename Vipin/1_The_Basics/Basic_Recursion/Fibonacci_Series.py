## Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.


def fib(n):
    if n <= 1:
        return n

    last = fib(n - 1)
    slast = fib(n - 2)

    return last + slast


if __name__ == "__main__":
    n = 10
    for i in range(0, n):
        print(fib(i), end="  ")
