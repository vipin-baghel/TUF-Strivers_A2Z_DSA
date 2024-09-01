def pal(s):
    l=0
    r=len(s)-1
    while l<r:
        if s[l] != s[r]:
            print(False)
            return
        l+=1
        r-=1
    return print(True)
    
def pal_r(s,l):
    r = len(s)-l-1
    if s[l] != s[r]:
        return False
    if l == r:
        return True
    return pal_r(s,l+1)

def main():
    s = "madam"
    pal(s)
    print(pal_r(s,0))

if __name__ == "__main__":
    main()