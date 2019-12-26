class Stack:
    def __init__(self):
        self.storage = []

    def push(self, item):
        self.storage.append(item)

    def remove(self):
        if len(self.storage) < 1:
            return None
        return self.storage.pop()

    def size(self):
        return len(self.storage)

    def isEmpty(self):
        return self.storage == 0

    def peek(self):
        return self.storage[len(self.storage) - 1]


Mariam = Stack()
Mariam.push('Old')
Mariam.push('Young')
Mariam.push('Aged')
Mariam.push('Adolescent')
""" print(Mariam.isEmpty())
print(Mariam.size())
print(Mariam.peek()) """

def revStr(str):
    reversedStr = Stack()
    strRev = ''
    for i in str:
        reversedStr.push(i)
    i = 0
    while i < len(str):
        x = reversedStr.remove()
        strRev = strRev + x 
        i = i + 1
    return strRev

print(revStr('International'))
