// 13. Пользователь вводит число. Определите, лежит ли оно в диапазоне от 10 до 20 включительно. Если
// да — верните "В диапазоне", если нет — "Вне диапазона". Для вывода данных в консоль
// использовать интерполяцию.
// Входные: 15 → Результат: "15 - В диапазоне"
// Входные: 25 → Результат: "25 - Вне диапазона"

let a = +prompt()

if (isNaN(a)) {
    console.log('Введено не число')
} else if (a <= 20 & a >= 10) {
    console.log('в диапазоне')
} else {
    console.log('вне диапазона')
}