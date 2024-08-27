## Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.


def sum_of_natural_numbers(n):
    if n == 0:
        return 0
    else:
        return n + sum_of_natural_numbers(n - 1)


if __name__ == "__main__":
    print(sum_of_natural_numbers(5))
