// 30. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Найти наименьшее число в массиве. Если в массиве нет чисел, вывести "Нет чисел". Использовать
// метод reduce.
// Входные: [10, 3, 5, 7] → Результат: 3
// Входные: ["apple", "banana", "cherry"] → Результат: "Нет чисел"
// Входные: [50, 20, 30] → Результат: 20

let n = prompt()
let arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt())
}
let result
result = arr.reduce(function(min, elem){
    if(min> elem){
        min = elem
    }
    return min
})

console.log(result)

