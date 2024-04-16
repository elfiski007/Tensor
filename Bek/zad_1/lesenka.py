quantity = int(input('Введите ваше число '))
sharp = ""
i = 0
while(i < quantity):
    i += 1
    white = quantity - i
    print(f'{" " * white} {"#" * i}')

