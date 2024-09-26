// 5. На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию
// Входные: 2, 5 → Результат: 32
// Входные: 3, 4 → Результат: 81
let res = 1
function rec(n, step) {
    if (step < 1) return res
    res *= n
    step--
    return rec(n, step)
}
console.log(rec(2, 5));
