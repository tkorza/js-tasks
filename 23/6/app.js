// 6. На входе массив array. Посчитайте количество элементов массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 20, 30] → Результат: 3
// Входные: [1, [2, [3]], 4] → Результат: 3
let pointer = 0
function rec(arr) {
    if (pointer == arr.length) return pointer
    pointer++
    return rec(arr)
}
arr = [1, [2, [3]], 4]
console.log(rec(arr));
