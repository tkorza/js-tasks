// 12. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Значения могут быть строкового или числового типа данных. Составить два массива: один из строк,
// другой — из чисел. Использовать метод forEach.
// Входные: ["apple", 10, "banana", 20, 30, "cherry"] → Результат: ["apple", "banana", "cherry"], [10, 20, 30]
// Входные: [5, "dog", 7, "cat"] → Результат: ["dog", "cat"], [5, 7]
// Входные: ["a", "b", "c", 1, 2, 3] → Результат: ["a", "b", "c"], [1, 2, 3]

let n = prompt('Введите n')
let arr = []
for (let i = 0; i < n; i++) {
    arr.push(prompt())
}

let numberArr = []
let strArr = []

arr.forEach(function (elem) {
    if (isNaN(elem)) {
        strArr.push(elem)
    } else {
        numberArr.push(elem)
    }
})

console.log(numberArr)
console.log(strArr)