// 9. Пользователь вводит число. Выведите все числа от 1 до введенного числа, которые кратны 3.
// Входные: 10 → Результат: 3, 6, 9
// Входные: 15 → Результат: 3, 6, 9, 12, 15

let a = prompt()

for (i = 1; i <= a; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}