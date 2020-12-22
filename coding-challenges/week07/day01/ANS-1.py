def merge(array, start_one, end_one, start_two, end_two):
    p1 = start_one
    p2 = start_two
    temp = []

    while p1 <= end_one and p2 <= end_two:
        if array[p1] < array [p2]:
            temp.append(array[p1])
            p1 += 1
        else:
            temp.append(array[p2])
            p2 += 1
    
    while p1 <= end_one:
        temp.append(array[p1])
        p1 += 1

    while p2 <= end_two:
        temp.append(array[p2])
        p2 += 1

    i = 0
    while i < len(temp):
        array[i + start_one] = temp[i]
        i += 1

def mergeSort(array, left, right):
    if left >= right:
        return

    mid = (left + right) >> 1
    mergeSort(array, left, mid)
    mergeSort(array, mid + 1, right)

    merge(array, left, mid, mid + 1, right)

if __name__ == '__main__':
    array = [1,2,4,8,10,6,9,11,23,45]
    left = 0
    right = len(array) - 1

    mergeSort(array, left, right)

    print(array)