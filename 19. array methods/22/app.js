// 22. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать массив, в котором каждый элемент массива является произведением его индекса и
// значения. Использовать метод map.
// Входные: [1, 2, 3, 4] → Результат: [0, 2, 6, 12]
// Входные: [5, 10, 15] → Результат: [0, 10, 30]
// Входные: [2, 4, 6] → Результат: [0, 4, 12]


let n = prompt()
let arr = []
let result = []
for (let i = 0; i < n; i++) {
    arr.push(+prompt())
}
result = arr.map(function (elem, ind) {
    return elem * ind
})





console.log(result)

