## Factorial of a Number : Iterative and Recursive


def factorial_iterative(n):
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    return fact


def factorial_recursive(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial_recursive(n - 1)


if __name__ == "__main__":
    print(factorial_iterative(5))
    print(factorial_recursive(5))
