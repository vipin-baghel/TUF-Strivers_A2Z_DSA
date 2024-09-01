def fab(n):
    x=0
    y=1
    for i in range(n):
        x,y=y,x+y
        print(x,end='')

def fab_r(n):
    if n<=1:
        return n
    x = fab_r(n-1)
    y = fab_r(n-2)
    return x+y


def main():
    print(fab_r(4))
    fab(4)

if __name__ == "__main__":
    main()