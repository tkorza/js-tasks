// 11. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, где каждый элемент преобразуется в строку вида #name. Использовать
// методы map и forEach.
// Входные: ["hschool", "company"] → Результат: ["#hschool", "#company"]
// Входные: ["apple", "banana"] → Результат: ["#apple", "#banana"]
// Входные: ["car", "bike", "bus"] → Результат: ["#car", "#bike", "#bus"]

let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}

console.log(arr)

let resultArr = []

// arr.forEach(function(elem){
//     resultArr.push('#'+elem)
// })

// console.log(resultArr)
resultArr = arr.map(function (elem) {
    return '#' + elem
})
console.log(resultArr)
