// 11. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

let n = 3

const factorial = (a) => {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

console.log(factorial(n));


