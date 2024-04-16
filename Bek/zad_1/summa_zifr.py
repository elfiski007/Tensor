initial_number = input('Ваше число на вход - ')
summa_even = 0
summa_odd = 0
for figure in initial_number:
    if int(figure) % 2 == 0:
        summa_even += int(figure)
    else: summa_odd += int(figure)
print(f'{summa_odd} {summa_even}')




