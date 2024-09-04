// 20. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод reduce, объединить все строки в массиве в одну строку, разделенную запятыми.
// Входные: ["apple", "banana", "cherry"] → Результат: "apple,banana,cherry"
// Входные: ["red", "green", "blue"] → Результат: "red,green,blue"


let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}

console.log(arr.reduce(function (res, el) {
    return res + ',' + el
}))

