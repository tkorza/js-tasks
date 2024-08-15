// Проверьте, является ли введенное значение числом. Если это число, выведите true, иначе — false.
// (Решить задачу через: if … else, тернарный оператор)
// Доп. материал:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// Входные: 42 → Результат: true
// Входные: "Hello" → Результат: false
// 4. Пользователь вводит число. Выведите сообщение о


let value = +prompt()


if (Number.isNaN(value)) {
    console.log('false')
} else {
    console.log('true')
}


Number.isNaN(value) == false ? console.log(true) : console.log(false)


