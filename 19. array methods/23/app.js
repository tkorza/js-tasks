// 23. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Проверить, содержит ли массив только четные числа. Использовать метод every.
// Входные: [2, 4, 6, 8] → Результат: true
// Входные: [2, 3, 4, 6] → Результат: false
// Входные: [4, 6, 8, 10] → Результат: true


let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}


let result = arr.every(function (el) {
    if (el % 2 == 0) {
        return true
    } else {
        return false
    }
})

console.log(result)