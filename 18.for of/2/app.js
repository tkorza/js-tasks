// 2. Выведите каждый элемент массива [1, 2, 3, 4, 5] в консоль.
// Методы: Используйте циклы for, while, for...of.

let arr = [1, 2, 3, 4, 5]


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

let i = 0
while (i <arr.length) {
    console.log(arr[i])
    i++
}

for( let el of arr){
    console.log(el)
}