// 26. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Вывести true, если все строки в массиве имеют длину более 3 символов. Использовать метод every.
// Входные: ["apple", "banana", "cherry"] → Результат: true
// Входные: ["dog", "cat", "apple"] → Результат: false
// Входные: ["hschool", "company", "cherry"] → Результат: true

let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}
let result
result = arr.every(function (elem) {
    if (elem.length > 3) {
        return true
    } else {
        return false
    }
})

console.log(result)

