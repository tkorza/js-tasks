// 28. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Использовать метод map для создания нового массива, где все строки преобразованы в верхний
// регистр.
// Входные: ["apple", "banana", "cherry"] → Результат: ["APPLE", "BANANA", "CHERRY"]
// Входные: ["dog", "cat"] → Результат: ["DOG", "CAT"]
// Входные: ["hschool", "company"] → Результат: ["HSCHOOL", "COMPANY"]

let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}
console.log(arr)
let resultArr = []
resultArr = arr.map(function(elem){
    return elem.toUpperCase() 
})

console.log(resultArr)

