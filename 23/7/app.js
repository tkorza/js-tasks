// 7. Вычислить факториал числа используя рекурсию
// Входные: 4 → Результат: 24
// Входные: 5 → Результат: 120
// Входные: 3 → Результат: 6
let result = 1
let i = 1
function rec(n) {
    if (i > n) return result
    result *= i
    i++
    return rec(n)
}

console.log(rec(4));
