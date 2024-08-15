// Найдите квадратный корень из введенного числа. Если результат — дробное число, округлите его
// до ближайшего целого. Добавьте проверку, чтобы убедиться, что введено число. (Решить задачу
// через: if … else, тернарный оператор)
// Доп. материал:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// Входные: 49 → Результат: 7
// Входные: 50 → Результат: 7
// Входные: hi → Результат: Вы ввели не число!

let value = +prompt()

if (Number.isNaN(value)) {
    console.log('Вы ввели не число!')
} else {
    console.log(Math.round(Math.sqrt(value)))
}

Number.isNaN(value) == true ? console.log('Вы ввели не число!') : console.log(Math.round(Math.sqrt(value)))