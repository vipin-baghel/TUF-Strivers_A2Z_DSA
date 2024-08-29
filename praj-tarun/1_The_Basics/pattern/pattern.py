def pattern_1(n):
    i=0
    while i<n:
        j=0
        while j<n:
            print('*',end='')
            j+=1
        print()
        i+=1

def pattern_2(n):
    i=0
    while i<n:
        j=n-i
        while j<=n:
            print('*',end='')
            j+=1
        print()
        i+=1

def pattern_3(n):
    i=1
    while i<=n:
        j=1
        while j<=i:
            print(j, end='')
            j+=1
        print()
        i+=1
        
def pattern_4(n):
    i=1
    while i<=n:
        j=1
        while j<=i:
            print(i, end='')
            j+=1
        print()
        i+=1

def pattern_5(n):
    i=n
    while i>0:
        j=i
        while j>0:
            print('*',end='')
            j-=1
        print()
        i-=1

def pattern_6(n):
    i=1
    while i<=n:
        j=1
        while j<=n-i+1:
            print(j, end='')
            j+=1
        print()
        i+=1

def pattern_7(n):
    i=0
    while i<n:
        j=1
        while j<=n-i:
            print(' ', end='')
            j+=1
        j=1
        while j<=2*i+1:
            print('*',end='')
            j+=1
        j=1
        while j<=n-i:
            print(' ', end='')
            j+=1
        print()
        i+=1

def pattern_8(n):
    i=n-1
    while i>=0:
        j=1
        while j<=n-i:
            print(' ', end='')
            j+=1
        j=1
        while j<=2*i+1:
            print('*',end='')
            j+=1
        j=1
        while j<=n-i:
            print(' ', end='')
            j+=1
        print()
        i-=1

def pattern_9(n):
    pattern_7(n)
    pattern_8(n)

def pattern_10(n):
    pattern_2(n)
    pattern_5(n-1)

def pattern_11(n):
    i=1
    while i<=n:
        j=1
        while j<=i:
            if (i+j)%2==0:
                print(1,end='')
            else:
                print(0,end='')
            j+=1
        print()
        i+=1

def pattern_12(n):
    i=1
    while i<=n:
        j=1
        while j<=n*2:
            if j<=i:
                print(j,end='')
            elif j>2*n-i:
                print(2*n-j+1,end='')
            else:
                print(' ',end='')
            j+=1
        print()
        i+=1

def ispalindrome(n):
    l=0
    r=len(n)-1
    while l<r:
         
        

def main(): 
    pattern_12(4)
 


if __name__ == "__main__":
    main()