# So I am submiting the code which will run here on VS code instead

def solve(s,t):
    n = len(s)
    collection = []
    c = 0
    for i in range(n):
        for j in range(i, n + 1):
            temp = s[i : j]
            if temp != "" and len(temp) > 1:
                if not is_repeated(temp):
                    for k in temp:
                        if k in t:
                            c += 1
                    if c == len(t):
                        collection.append(temp)
                    c = 0
    return collection

def  is_repeated(s):
    map = {}
    for character in s:
        if character not in map:
            map[character]=1
        else:
            return True
    return False
 
if __name__ == "__main__":
    s = "THISISTHETESTCASE"
    target = "STA"
    ls = []
    final = ""
    target1 = ""

    for i in target:
        if i not in target1:
            target1 += i
    
    ls = solve(s, target1)
    min = len(ls[0])

    for i in ls:
        if len(i) < min:
            min = len(i)
            final = i

    print("Minimum length substring with target string is:")
    print(final)