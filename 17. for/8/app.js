// 8. Дан статичный массив чисел. Найдите произведение всех элементов массива с использованием
// цикла for.
// Входные: [1, 2, 3, 4, 5] → Результат: 120


let arr = [1, 2, 3, 4, 5]
let result = 1


for(i=0; i<arr.length; i++){
    result*=arr[i]
}

console.log(result)

























// let a = [1, 2, 3, 4, 5]
// let result = 1

// for (i = 0; i < a.length; i++) {
//     result *= a[i]
// }

// console.log(result)