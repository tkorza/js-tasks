// 4. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Вывести произведение всех элементов массива. Добавить проверку на ввод только чисел.
// Использовать методы forEach или reduce.
// Входные: [2, 3, 4, 5] → Результат: 120
// Входные: [1, 5, 10] → Результат: 50
// Входные: [7, 8, 2] → Результат: 112

let n = prompt('Введите N')
let arr = []
let test
let result = 1
for (let i = 0; i < n; i++) {
    test = prompt('Введите значение')

    if (isNaN(test)) {
        continue
    } else {
        arr.push(test)
    }
}

arr.forEach(function (elem) {
    result *= elem
})

console.log(result)