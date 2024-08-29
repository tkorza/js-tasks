// Создайте новый массив, заполненный только числами из исходного массива смешанных
// элементов.
// Методы: Используйте цикл for.
// Входные: ["apple", 3, "orange", 2] → Результат: [3, 2]

let arr = ["apple", 3, "orange", 2]
let arr_ = []

for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        continue;
    } else {
        arr_.push(arr[i])
    }
}

console.log(arr_)
