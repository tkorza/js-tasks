// 9. Реализуйте поиск максимального числа статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 5, 8] → Результат: 10
let max = -Infinity
function rec(arr, i) {
    if (i == arr.length) return max
    if (max < arr[i]) max = arr[i]

    i++
    return rec(arr,i)
}
let arr = [10, 5, 8]
let i = 0
console.log(rec(arr, i));
