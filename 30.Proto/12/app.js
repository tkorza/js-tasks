// 12. Напишите алгоритм для нахождения факториала числа
let a = 5

const fact = (a) => {
    let result = 1
    for (let i = 1; i <= a; i++) {
        result *= i
    }
    return result
}

console.log(fact(a));
