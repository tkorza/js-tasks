/*
Пользователь вводит с клавиатуры 2 числа: a и b. Проверьте, что a делится без
остатка на b. Если это так - выведите 'Делится' и результат деления, иначе
выведите 'Делится с остатком' и остаток от деления

 */
let a = +prompt()
let b = +prompt()

if (a % b == 0) {
    console.log('Делится: ' + a / b);
}

else {
    console.log('Делится с остатком. Остаток: ' + a % b);
}





