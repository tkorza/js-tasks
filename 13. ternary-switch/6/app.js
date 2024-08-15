// Два автомобиля движутся навстречу друг другу с постоянными скоростями V1 и V2 км/ч.
// Определите, через сколько времени они встретятся, если начальное расстояние между ними
// равно S км. Добавьте проверку, чтобы убедиться, что введенные значения — числа.
// Доп. материал:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// Входные: 60, 40, 200 → Результат: 2 часа
// Входные: 80, 20, 300 → Результат: 3 часа
// Входные: hi → Результат: Вы ввели не число!


let v1 = +prompt()
let v2 = +prompt()
let s = +prompt()
let isNum
if (isNaN(v1) == false & isNaN(v2) == false & isNaN(s) == false) {
    isNum = true
} else {
    isNum = false
}
if (isNum) {
    console.log(s / (v1 + v2) + 'часа')
} else {
    console.log('error')
}