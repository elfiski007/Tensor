zent = 50
i = 1
max = 101
min = 0
while i == 1:
    a = input(f'Ваше число больше {zent}? ')
    match a:
        case 'Больше':
            min = zent
            zent = int((max - zent)/2) + zent
        case 'Меньше':
            max = zent
            zent = max - int(zent/2)
        case 'Верно':
            i = 0