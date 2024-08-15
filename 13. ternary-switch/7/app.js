// 7. Пользователь вводит номер месяца. Необходимо вывести пору года по номеру месяца. Добавьте
// проверку, чтобы убедиться, что введенные значения — числа. (Решить задачу через switch … case)
// Доп. материал:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// Входные: 3 → Результат: Весна
// Входные: 8 → Результат: Лето
// Входные: hi → Результат: Вы ввели не число!

let mounth = +prompt()


switch (mounth) {
    case 1:
        console.log('Зима')
        break;
    case 2:
        console.log('Зима')
        break;
    case 3:
        console.log('Весна')
        break;
    case 4:
        console.log('Весна')
        break;
    case 5:
        console.log('Весна')
        break;
    case 6:
        console.log('Лето')
        break;
    case 7:
        console.log('Лето')
        break;
    case 8:
        console.log('Лето')
        break;
    case 9:
        console.log('Осень')
        break;
    case 10:
        console.log('Осень')
        break;
    case 11:
        console.log('Осень')
        break;
    case 12:
        console.log('Зима')
        break;

    default:
        console.log("Вы ввели не число!")
        break;
}