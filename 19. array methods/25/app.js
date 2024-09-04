// 25. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, состоящий из длин строк в исходном массиве. Использовать метод map.
// Входные: ["apple", "banana", "cherry"] → Результат: [5, 6, 6]
// Входные: ["dog", "cat"] → Результат: [3, 3]
// Входные: ["hschool", "company"] → Результат: [7, 7]

let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}
let resultArr = []
resultArr = arr.map(function(el){
    return el.length
})

console.log(resultArr)

