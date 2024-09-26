// 8. Вычислите сумму массива чисел статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 10
// Входные: [10, 20, 30] → Результат: 60
let sum = 0

function rec(arr, i) {
    if (i == arr.length) return sum
    sum+= arr[i]
    i++
    return rec(arr, i)
}
let arr = [1, 2, 3, 4]
let i = 0
console.log(rec(arr, i));
