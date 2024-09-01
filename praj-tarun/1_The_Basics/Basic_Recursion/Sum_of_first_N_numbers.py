def sum_np(n,sum):
    if n<1:
        print(sum)
        return
    sum_np(n-1,sum+n)

def sum_nf(n):
    if n==0:
        return 0
    return n+sum_nf(n-1)

def main():
    sum_np(3,0)
    print(sum_nf(3))

if __name__ == "__main__":
    main()