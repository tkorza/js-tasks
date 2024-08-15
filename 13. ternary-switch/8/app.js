// Пользователь вводит число: 1, 2, 3 или 4. Если введенное значение равно '1', то вывести в консоль
// 'зима'; если '2' – 'весна' и так далее. Добавьте проверку на ввод только чисел. Решите задачу через
// switch-case.
// Доп. материал:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// Входные: 1 → Результат: зима
// Входные: 4 → Результат: лето
// Входные: hi → Результат: Вы ввели не число!
let mounth = +prompt()

if (isNaN(mounth) == false) {
    switch (mounth) {
        case 1:
            console.log('Зима')
            break;
        case 2:
            console.log('весна')
            break;
        case 3:
            console.log('лето')
            break;
        case 4:
            console.log('осень')
            break;
        default:
            console.log("Вы ввели не число!")
            break;
    }
} else {
    console.log('Вы ввели не число!')
}