// 3. На входе число n. Вычислите сумму натуральных чисел от 1 до n используя рекурсию
// Входные: 5 → Результат: 15
// Входные: 3 → Результат: 6
// Входные: 10 → Результат: 55
let sum = 0
function rec(n, sum) {
    if (n < 1) return sum
    sum += n
   
    
    n--
    return rec(n, sum)
}

console.log(rec(5, sum));



