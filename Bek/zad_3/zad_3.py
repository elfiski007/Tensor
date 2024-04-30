'''В варианте нескольких открывающих скобок без пары, выводит номер последней открывающей,
так как в моем понимании именно это является первой ошибкой ({{{{} - 3)'''
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        '''добавление элемента в конец стека'''
        self.stack.append(item)

    def pop(self):
        '''удаление последнего элемента из стека, в случае если стек не пустой'''
        if len(self.stack) == 0:
            return None
        else: removed = self.stack.pop()
        return removed


skobki = input("Введите ваш текст под проверку - ")
st = Stack()
ind = Stack()
dic = {'}':'{', ')':'(', ']':'['}
dl = len(skobki)
a = 0

for j,i in enumerate(skobki):
    if (i == '[' or i == '{' or i == '('):
        if (j == dl - 1):
            print(j + 1)
            a = 1
            break
        else:
            st.push(i)
            ind.push(j)
    elif (i == '}' or i == ']' or i == ')'):
        el = st.pop()
        if (el == None):
            print(j + 1)
            a = 1
            break
        else:
            index = ind.pop() + 1
            g = dic.get(i)
            if (g != el):
                print(index)
                a = 1
                break
    if (j == dl - 1):
        if(st.pop()):
            print(ind.pop() + 1)
            a = 1
            break

if ( a== 0):
    print('Success')