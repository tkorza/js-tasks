// Выведите все числа, кратные 5 или 3, из массива [2, 5, 9, 15, 0, 4].
// Методы: Используйте цикл while.
// Входные: [2, 5, 9, 15, 0, 4] → Результат: [5, 9 15, 0]

let arr = [2, 5, 9, 15, 0, 4]
let i = 0
while (i < arr.length) {
    if (arr[i] % 5 === 0 || arr[i] % 3 === 0) {
        console.log(arr[i])
    }
    i++
}
