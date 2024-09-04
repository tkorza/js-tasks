// 27. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, содержащий строки длиной менее 5 символов. Использовать метод filter.
// Входные: ["apple", "banana", "cat"] → Результат: ["cat"]
// Входные: ["dog", "cat", "apple"] → Результат: ["dog", "cat"]
// Входные: ["hschool", "company"] → Результат: []

let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}
let resultArr = []
resultArr = arr.filter(function (elem) {
    if (elem.length < 5) {
        return elem
    }
})

console.log(resultArr)

